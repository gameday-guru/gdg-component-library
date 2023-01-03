import { DispositionalCachelike, Cachelike, CacheDisposition } from "./cache";
import { Listenerlike, MultiPowerStorelike, FetchPolicy, ListenMessage } from "../operations";

export interface MultiCachelike<A, T> extends DispositionalCachelike<A, T>, MultiPowerStorelike<A, T> {
    // new (cacheOrder ? : DispositionalCachelike<A, T>[]) : MultiCachelike<A, T>;
    pushCache(...cache : DispositionalCachelike<A, T>[]) : void;
    popCache() : DispositionalCachelike<A, T>|undefined;
    getThrough(path : A) : Promise<T|undefined>;
    setThrough(path : A, value : T) : Promise<T|undefined>;
} 

export class MultiCache<A, T> implements MultiCachelike<A, T> {

    private cacheOrder : DispositionalCachelike<A, T>[];
    private monitors : {[key : string] : ((data : T | undefined, msg : ListenMessage) => void | Promise<void>)[]};
    private safeKey : Symbol = Symbol();

    /**
     * 
     * @param cacheOrder 
     */
    constructor(cacheOrder ? : DispositionalCachelike<A, T>[]){
        this.cacheOrder = cacheOrder||[];
        this.monitors = {};
    }

    /**
     * 
     * @param cache 
     */
    pushCache(...cache: DispositionalCachelike<A, T>[]): void {
        this.pushCache(...cache);
    }

    /**
     * 
     * @returns 
     */
    popCache(): DispositionalCachelike<A, T>|undefined {
        return this.cacheOrder.pop();
    }

    /**
     * 
     * @param path 
     * @param cb 
     * @returns 
     */
    async dispositionalRaceGet(path : A, cb : ((data : T | undefined, msg : ListenMessage) => void | Promise<void>)) : Promise<void> {

        return new Promise(async ()=>{

            let res : T | undefined = undefined;
            let finalLock = false;
            for(const [i, cache] of this.cacheOrder.entries()){
                switch(cache.disposition){


                    case CacheDisposition.FINAL : {

                        // NO SET
                        cache.get(path)
                        .then((data)=>{ 
                            finalLock = true;
                            res = data;
                            cb(res, ListenMessage.END);

                            // set all of those that came before
                            for(const inferiorCache of this.cacheOrder.slice(0, i))
                                if(res) inferiorCache.set(path, res);
                            

                        });

                        break;
                    }

                    case CacheDisposition.MUST : {

                        if(finalLock) continue;
                        cache.get(path)
                        .then((data)=>{
                            res = data;
                            if(i > this.cacheOrder.length - 2) cb(res, ListenMessage.END);
                            cb(res, ListenMessage.CONTINUE);

                            
                            // set all of those that came before
                            for(const inferiorCache of this.cacheOrder.slice(0, i))
                                if(res) inferiorCache.set(path, res);

                        });

                    }

                    case CacheDisposition.AUX : {

                        if(res !== undefined||finalLock) continue;
                        cache.get(path)
                        .then((data)=>{
                            res = data;
                            if(!res) return;
                            if(i > this.cacheOrder.length - 2) cb(res, ListenMessage.END);
                            cb(res, ListenMessage.CONTINUE);

                            // don't set anything

                        });

                        break;
                    }

                    default : {
                        continue;
                    }
                }

            }


        })

    }

    /**
     * 
     * @param path 
     * @param cb 
     * @returns 
     */
    async dispositionalFifoGet(path : A, cb : ((data : T | undefined, msg : ListenMessage) => void | Promise<void>)) : Promise<void> {

        let res : T | undefined = undefined;
        for(const [i, cache] of this.cacheOrder.entries()){

            switch(cache.disposition){

                case CacheDisposition.FINAL : {

                    res = await cache.get(path);
                    await cb(res, ListenMessage.END);
                    if(res !== undefined) return;

                    // set all of those that came before
                    for(const inferiorCache of this.cacheOrder.slice(0, i))
                        if(res) inferiorCache.set(path, res);

                    break;
                }

                case CacheDisposition.MUST : {

                    res = await cache.get(path);
                    if(i > this.cacheOrder.length - 2) await cb(res, ListenMessage.END);
                    await cb(res, ListenMessage.CONTINUE);

                    // set all of those that came before
                    for(const inferiorCache of this.cacheOrder.slice(0, i))
                        if(res) inferiorCache.set(path, res);

                    break;

                }

                case CacheDisposition.AUX : {

                    if(res !== undefined) continue;
                    res = await cache.get(path);
                    if(i > this.cacheOrder.length - 2) await cb(res, ListenMessage.END);
                    await cb(res, ListenMessage.CONTINUE);

                    // don't set anything

                    break;
                }

                default : {
                    continue;
                }
            }

        }

    }

     /**
     * 
     * @param path 
     * @param cb 
     * @returns 
     */
     async eagerGet(path : A, cb : ((data : T | undefined, msg : ListenMessage) => void | Promise<void>)) : Promise<void> {

        let res : T | undefined = undefined;
        for(const [i, cache] of this.cacheOrder.entries()){

            const res = await cache.get(path);
            await cb(res, ListenMessage.END);
            if(res !== undefined) return;

        }

    }

    /**
     * 
     * @param path 
     * @param cb 
     * @param policy 
     */
    listen(
        path: A, 
        cb : ((data : T | undefined, msg : ListenMessage) => void | Promise<void>),
        policy ? : FetchPolicy
    ): void {


        switch (policy) {

            case FetchPolicy.DRACE : {

                this.dispositionalRaceGet(path, cb);

                break;

            }

            case FetchPolicy.FIFO : {

                this.dispositionalFifoGet(path, cb);

                break;

            }

            case FetchPolicy.EAGER : {

                this.eagerGet(path, cb);

                break;

            }

            default : {

                this.dispositionalFifoGet(path, cb);

                break;

            }

        }
            
    }

    /**
     * 
     * @param path 
     * @returns 
     */
    getThrough(path: A): Promise<T | undefined> {
        
        return new Promise((resolve)=>{

            let res : T | undefined = undefined;
            this.listen(path, (data, msg)=>{

                res = data;
                if(msg === ListenMessage.END) 
                    resolve(res);

            }, FetchPolicy.FIFO);

        });

    }

    /**
     * 
     * @param path 
     * @returns 
     */
    get(path: A): Promise<T | undefined> {

        return new Promise((resolve)=>{

            this.listen(path, (data, msg)=>{

                if(data !== undefined||msg === ListenMessage.END) 
                    resolve(data);

            }, FetchPolicy.DRACE);

        });
        
    }

    /**
     * 
     * @param path 
     * @param value 
     * @returns 
     */
    async setThrough(path: A, value : T): Promise<T | undefined> {
        
        let res : T | undefined = undefined;
        for(const cache of this.cacheOrder)
            res = await cache.set(path, value);
        return res;

    }
    
    /**
     * 
     * @param path 
     * @param value 
     * @returns 
     */
    async set(path: A, value: T): Promise<T | undefined> {
        
        return await this.setThrough(path, value);

    }

    /*async runMonitors(path : A, value : T){

        for(const monitor of this.monitors)

    }*/

}