import React, { useEffect, useState } from "react";
import { MainDatabase } from "../../data/database";
import { Processorlike } from "../processor";
import { ontology } from "../../../util";
import { DateComparison } from "../../../util/date";
import { useMultiPowerStore } from "./useMultiPowerStore";

export const usePlayers = () : {

    getPlayers : Processorlike['getPlayers'],
    getPlayersTable : Processorlike['getPlayersTable'],


}=>{

    const {
        get : getPlayers
    } = useMultiPowerStore(MainDatabase.multiListeners.players);

    const getPlayersTable = (team : ontology.Teamlike)=>{
        
        const players = getPlayers(team);
        if(!players) return undefined;

        const playersTable :  { [key : string] : ontology.Playerlike } = {};
        for(const player of players)
            playersTable[player.PlayerID.toString()] = player;

        return playersTable;

    };

    


    return {
        getPlayers,
        getPlayersTable
    }

}