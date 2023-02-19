import { Storelike } from "../operations";
import { generate } from "shortid";
import { createRxDatabase, createRxSchema, RxCollectionCreator, RxDatabase } from "rxdb";
import { getRxStorageDexie } from "rxdb/plugins/storage-dexie";
import { to } from "await-to-js";

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
    db : Promise<RxDatabase>;

    constructor(cacheKey : string, disposition ? : CacheDisposition){
        this.cacheKey = `${cacheKey}`;
        this.disposition = disposition||CacheDisposition.AUX;
        this.db = new Promise(async (resolve, reject)=>{

            const db = await createRxDatabase({
                name : "rx.app.gamedayguru.com",
                storage : getRxStorageDexie(),
                multiInstance : true,
                eventReduce : true,
                ignoreDuplicate : true
            });
    
            const res = await db.addCollections({
                    [this.cacheKey] : {
                        schema : {
                            version : 0,
                            primaryKey : "id",
                            type : "object",
                            properties : {
                                id : {
                                    type : 'string',
                                    maxLength : 256
                                },
                                data : {
                                    type : 'string'
                                }
                            },
                            required : ['id', 'data']
                        }
                    }
            });
            resolve(db);

        })
    }

    getKey(path : A) : string {
        return `${this.cacheKey}::` + JSON.stringify(path)
    }


    async get(path: A): Promise<T | undefined> {

        const db = await this.db;
        const res = await db[this.cacheKey].findOne(this.getKey(path)).exec();

        if(!res) return undefined;
   
        return JSON.parse(res._data.data);
        
    }

    async set(path: A, value: T): Promise<T | undefined> {

        const db = await this.db;
        const res = await db[this.cacheKey].upsert({
            id : this.getKey(path),
            data : JSON.stringify(value)
        });

        return JSON.parse(res._data.data);

    }

}