import { Storelike } from "../operations";
import { generate } from "shortid";

export interface Cachelike<A,T> extends Storelike<A, T> {

}

export enum CacheDisposition {
    AUX = "AUX",
    MUST = "MUST",
    FINAL = "FINAL",
}

export interface DispositionalCachelike<A, T> extends Cachelike<A, T> {
    disposition ? : CacheDisposition;
}

export class MemCache<A, T> implements DispositionalCachelike<A, T> {

    private cache : Map<A|Symbol, T> = new Map();
    private safeKey : Symbol; // if map is a nullary

    disposition ? : CacheDisposition;

    constructor(disposition ? : CacheDisposition){
        this.disposition = disposition;
        this.safeKey = Symbol();
    }

    async get(path: A): Promise<T | undefined> {

        return this.cache.get(path||this.safeKey);
        
    }

    async set(path: A, value: T): Promise<T | undefined> {
        
        this.cache.set(path||this.safeKey, value);
        return this.get(path);

    }

}

export class LocalStorageCache<A, T> implements DispositionalCachelike<A, T> {

    disposition ? : CacheDisposition;
    cacheKey : string;
    request : IDBOpenDBRequest | undefined;
    onErrorCallbacks : ((dbr: IDBRequest<IDBDatabase>, ev : Event)=>any)[];
    onSuccessCallbacks : ((dbr: IDBRequest<IDBDatabase>, ev : Event)=>any)[];
    db : IDBDatabase | undefined;
    store : IDBObjectStore | undefined;

    constructor(cacheKey : string, disposition ? : CacheDisposition){
        this.cacheKey = `${cacheKey}`;
        this.disposition = disposition||CacheDisposition.AUX;
        this.onErrorCallbacks = [];
        this.onSuccessCallbacks = [];
    }

    handleOnErrorCallbacks = (dbr: IDBRequest<IDBDatabase>, ev : Event)=>{
        for(const cb of this.onErrorCallbacks){
            cb(dbr, ev);
            this.onErrorCallbacks = this.onErrorCallbacks.slice(1);
        }
    }

    handleOnSuccessCallbacks = (dbr: IDBRequest<IDBDatabase>, ev : Event)=>{

        for(const cb of this.onSuccessCallbacks){
            cb(dbr, ev);
            this.onSuccessCallbacks = this.onSuccessCallbacks.slice(1);
        }
    }

    async getIndexedDbConnection() : Promise<IDBDatabase> {

        if(this.db) return this.db;

        return new Promise((resolve, reject)=>{

            if(!this.request){

                this.request = window.indexedDB.open("app.gamedayguru.com", 11);

                this.request.onerror = async (ev)=>{
                    if(this.request) this.handleOnErrorCallbacks(this.request, ev);
                }

                this.request.onsuccess = async (ev)=>{
                    console.log("On success triggered...", ev);
                    this.db = (ev as any).target.result;
                    if(this.request && await this.getIdbStore()) this.handleOnSuccessCallbacks(this.request, ev);
                }

                this.request.onupgradeneeded = async (ev)=>{
                    this.createIdbStore(ev);
                    if(this.request) this.handleOnSuccessCallbacks(this.request, ev);
                }

            }
            
            this.onErrorCallbacks.push((db, ev)=>reject((ev as any).errorCode));
            this.onSuccessCallbacks.push((db, ev)=>{

                if(!(ev as any).result) reject("Sucess callback did not provide IndexedDB");
                this.db = (ev as any).result;
                if(this.db) {
                    resolve(this.db);
                }
                else reject("DB not available.");

            })

        });

    }

    createIdbStore(ev : IDBVersionChangeEvent) : IDBObjectStore {

        console.log("Creating store...", this.cacheKey);

        if(this.store) return this.store;
        const db = ((ev as any).target.result as IDBDatabase);

        console.log(db.objectStoreNames, db.objectStoreNames.contains(this.cacheKey));
        if(!db.objectStoreNames.contains(this.cacheKey)){
            console.log("Stored needed to be created....");
            this.store = db.createObjectStore(this.cacheKey);
            return this.store;
        }
        else {
            this.store = db.transaction([this.cacheKey]).objectStore(this.cacheKey);
            return this.store;
        }

    }

    async getIdbStore() : Promise<IDBObjectStore> {

        console.log("Getting store....", this.store);

        if(this.store) return this.store;

        return new Promise(async (resolve, reject)=>{

            let count = 0;
            const interval = setInterval(()=>{

                try {
                    this.store = this.db?.transaction(this.cacheKey).objectStore(this.cacheKey);
                } catch (e){
                    console.log("Store assignment error: ", e);
                }

                console.log("Polling store....", this.db);

                if(count > 20){
                    reject(`Could not establish connection to the ${this.cacheKey} store in time.`);
                    clearInterval(interval)
                }

                if(this.store){
                    resolve(this.store);
                    clearInterval(interval)
                }

                count++;

            }, 10)

        });


    }

    getKey(path : A) : string {
        return `${this.cacheKey}::` + JSON.stringify(path)
    }

    async idbGet(path : A) : Promise<any> {

        return new Promise(async (resolve, reject)=>{

            const db = await this.getIndexedDbConnection();
            const request = db.transaction(this.cacheKey)
            .objectStore(this.cacheKey).get(this.getKey(path));

            request.onsuccess = (ev)=>resolve((ev as any).result);
            request.onerror = ()=>reject();

        });
        
    }

    async idbSet(path : A, value: T) : Promise<void> {

        return new Promise(async (resolve, reject)=>{

            const db = await this.getIndexedDbConnection();
            const request = db.transaction(this.cacheKey)
            .objectStore(this.cacheKey)
            .put(JSON.stringify(value), this.getKey(path));

            request.onsuccess = ()=>resolve();
            request.onerror = ()=>reject();

        });

    }

    async get(path: A): Promise<T | undefined> {

        const res = await this.idbGet(path);

        return this.idbGet(path);
        
    }

    async set(path: A, value: T): Promise<T | undefined> {

        this.idbSet(path, value);
        return this.get(path);

    }

}