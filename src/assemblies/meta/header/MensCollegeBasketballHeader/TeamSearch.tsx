import React, {FC, ReactElement, useEffect, useState} from 'react';
import { Wrapper } from '../../../../components';
import { ontology, viusage } from '../../../../util';
import { LeftRight } from '../../../../components/output/containers/general';
import { Snu } from '../Snu';
import { SportsBasketball } from "@mui/icons-material";
import { ProjectedGamelike } from '../../../../util/ontology';
import levenshtein from "fast-levenshtein";
import { MockOver } from '../../../../components/output/MockOver';
import { SideTeam } from '../../../data/ncaab/team/SideTeam';
import { SideMatchup } from '../../../data/ncaab/matchup/SideMatchup/SideMatchup';
import { generate } from 'shortid';
import { SearchBarWithEntries } from '../../../../components/input/text/SearchBarWithEntries';
import zIndex from '@mui/material/styles/zIndex';

export const MENS_COLLEGE_BASKETBALL_DESKTOP_HEADER_CONTAINER_CLASSNAMES : string[] = [ ];
export const MENS_COLLEGE_BASKETBALL_DESKTOP_HEADER_CONTAINER_STYLE : React.CSSProperties = {
};

export const MENS_COLLEGE_BASKETBALL_DESKTOP_HEADER_INNER_CLASSNAMES : string[] = [ 

];
export const MENS_COLLEGE_BASKETBALL_DESKTOP_HEADER_INNER_STYLE : React.CSSProperties = {
    
};



export type TeamSearchProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    viusage ? : viusage.primary.Viusagelike;
    teams ? : ontology.Teamlike[];
    count ? : number;
    onTeamClick ? : (teamId : string)=>Promise<void>;
};

export const getLevDistance = (search : string, comp : string) : number =>{
    return levenshtein.get(search.toLowerCase(), comp.toLowerCase());
};

export const getTeamLevDistance = (search : string, team : ontology.Teamlike) : number => {

    return Math.min(
        getLevDistance(search, team.Name),
        getLevDistance(search, team.School),
        3 * getLevDistance(search, team.Conference||"")
    );

}

export const getGameLevDistance = (search : string, game : ontology.ProjectedGamelike) : number => {

    const homeLev = getTeamLevDistance(search, game.home);
    const awayLev = getTeamLevDistance(search, game.away);

    return Math.min(
        getLevDistance(search, `${game.home.Name}${game.away.Name}`),
        getLevDistance(search, `${game.home.Name}${game.away.School}`),
        getLevDistance(search, `${game.home.School}${game.away.Name}`),
        getLevDistance(search, `${game.home.School}${game.away.School}`),
        getLevDistance(search, `${game.away.Name}${game.home.Name}`),
        getLevDistance(search, `${game.away.Name}${game.home.School}`),
        getLevDistance(search, `${game.away.School}${game.home.Name}`),
        getLevDistance(search, `${game.away.School}${game.home.School}`),
        1.5 * homeLev,
        1.5 * awayLev,
        (homeLev + awayLev)/2
    );

}

export const TeamSearch : FC<TeamSearchProps>  = (props) =>{

    const _count = props.count||10;
    const _teams = props.teams||Array(25).fill(ontology.MockHome);

    // TODO: pull search management into top level
    const [searchTerm, setSearchTerm] = useState<string|undefined>(undefined);
    const [lastTerm, setLastSearchTerm] = useState<string|undefined>(undefined);
    // const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout|undefined>(undefined);

    const onSearchBarChange = (e : React.ChangeEvent)=>{
        const target = e.target as HTMLInputElement;
        if(target.value.length < 1) setSearchTerm(undefined);
        setSearchTerm(target.value);
        setLastSearchTerm(target.value);
    };

    const onSearchBarHoverOut = (e : React.MouseEvent)=>{
        setSearchTerm(undefined);
    }

    const onSearchBarHoverOver = (e : React.MouseEvent)=>{
        setSearchTerm(lastTerm);
    }

    // TODO: pull all of this out into top-level
    const topTeams : [
        React.ReactNode,
        number
    ][]|undefined = searchTerm ? _teams
    .map((team)=>{
        return [team, getTeamLevDistance(searchTerm, team)] as [
            ontology.Teamlike,
            number
        ];
    })
    .sort((teamA, teamB)=>{
        return teamA[1] - teamB[1];
    })
    .slice(0, _count)
    .map(([team, distance], i)=>{
        return [
            <MockOver
                key={`${team.School}x${i}`}
                Content={<SideTeam
                    style={{
                        width : "100%",
                        fontSize : 10,
                        textAlign : "left"
                    }}
                    onTeamClick={props.onTeamClick}
                    size={20}
                    hideVisitorStatus
                    viusage='backdrop'
                    team={team}/>}
                dependencies={[team]}/>,
            distance
        ]
    }) : undefined;


   

    const searchEntries = (topTeams) && [
        ...topTeams||[],
    ]
    .sort(([_, distanceA], [__, distanceB])=>{
        return distanceA - distanceB;
    })
    .slice(0, _count)
    .map(([node])=>node);

    return (
        <SearchBarWithEntries 
                style={props.style}
                inputProps={{
                    onChange : onSearchBarChange
                }}
                entriesWrapperProps={{
                    onMouseLeave : onSearchBarHoverOut,
                    onMouseEnter : onSearchBarHoverOver,
                    style : {
                        zIndex : 200000,
                    }
                }}
                entriesHeight={80}
                Entries={searchEntries}
                classNames={["rounded-full", "text-sm"]}/>
    )
};