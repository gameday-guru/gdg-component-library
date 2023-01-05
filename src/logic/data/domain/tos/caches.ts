import { CacheDisposition, DispositionalCachelike, LocalStorageCache, MemCache } from "../../cache/cache";
import { ontology } from "../../../../util";
import {  getToses, getTosTable } from "../../../../util/cms/tos";
import { MultiCache } from "../../../data/cache/multicache";

export class CmsToses implements DispositionalCachelike<undefined, ontology.TosTablelike> {

    disposition?: CacheDisposition | undefined = CacheDisposition.FINAL;

    async get(path: undefined): Promise<ontology.TosTablelike | undefined> {

        return getTosTable();
        
    }

    async set(path: undefined, value: ontology.TosTablelike): Promise<ontology.TosTablelike | undefined> {
        return undefined;
    }
}

export const TosesMultiCache = new MultiCache<undefined, ontology.TosTablelike>([
    new MemCache(CacheDisposition.MUST),
    new LocalStorageCache("Toses", CacheDisposition.AUX),
    new CmsToses()
]);
