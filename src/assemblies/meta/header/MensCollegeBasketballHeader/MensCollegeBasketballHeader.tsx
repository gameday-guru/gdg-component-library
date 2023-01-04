import React, {FC, ReactElement, useState} from 'react';
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

export const MENS_COLLEGE_BASKETBALL_HEADER_CONTAINER_CLASSNAMES : string[] = [ ];
export const MENS_COLLEGE_BASKETBALL_HEADER_CONTAINER_STYLE : React.CSSProperties = {
};

export const MENS_COLLEGE_BASKETBALL_HEADER_INNER_CLASSNAMES : string[] = [ 
    "grid",
    "p-4"
];
export const MENS_COLLEGE_BASKETBALL_HEADER_INNER_STYLE : React.CSSProperties = {
    
};

export type MensCollegeBasketballHeaderProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    viusage ? : viusage.primary.Viusagelike;
    projectedGames ? : ontology.ProjectedGamelike[];
    teams ? : ontology.Teamlike[];
    count ? : number;
};

export const getTeamLevDistance = (search : string, team : ontology.Teamlike) : number => {

    return Math.min(
        levenshtein.get(search, team.Name),
        levenshtein.get(search, team.School)
    );

}

export const getGameLevDistance = (search : string, game : ontology.ProjectedGamelike) : number => {

    return Math.min(
        levenshtein.get(search, `${game.home.Name}${game.away.Name}`),
        levenshtein.get(search, `${game.home.Name}${game.away.School}`),
        levenshtein.get(search, `${game.home.School}${game.away.Name}`),
        levenshtein.get(search, `${game.home.School}${game.away.School}`)
    );

}

export const MensCollegeBasketballHeader : FC<MensCollegeBasketballHeaderProps>  = (props) =>{

    const _count = props.count||5;
    const _projecteGames = props.projectedGames||Array(25).fill(ontology.MockProjectedGame);
    const _teams = props.teams||Array(25).fill(ontology.MockHome);

    // TODO: pull search management into top level
    const [searchTerm, setSearchTerm] = useState<string|undefined>(undefined);

    const onSearchBarChange = (e : React.ChangeEvent)=>{
        const target = e.target as HTMLInputElement;
        if(target.value.length < 1) setSearchTerm(undefined);
        setSearchTerm(target.value);
    };

    const onSearchBarBlur = (e : React.FocusEvent)=>{
        setSearchTerm(undefined);
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
    .map(([team, distance])=>{
        return [
            <MockOver
                Content={<SideTeam
                    size={20}
                    hideVisitorStatus
                    viusage='backdrop'
                    team={team}/>}
                dependencies={[team]}/>,
            distance
        ]
    }) : undefined;


    const topMatchups : [
        React.ReactNode,
        number
    ][]|undefined = searchTerm ? _projecteGames
    .map((game)=>{
        return [game, getGameLevDistance(searchTerm, game)] as [
            ontology.ProjectedGamelike,
            number
        ];
    })
    .sort((gameA, gameB)=>{
        return gameA[1] - gameB[1];
    })
    .slice(0, _count)
    .map(([game, distance])=>{
        return [
            <MockOver
                Content={<SideMatchup
                    style={{
                        fontSize : 10
                    }}
                    size={20}
                    short
                    stack
                    // viusage='backdrop'
                    home={game.home}
                    away={game.away}
                    game={game.game}
                />}
                dependencies={[game]}/>,
            distance
        ]
    }) : undefined;

    const searchEntries = (topTeams || topMatchups) && [
        ...topTeams||[],
        ...topMatchups||[]
    ]
    .sort(([_, distanceA], [__, distanceB])=>{
        return distanceA - distanceB;
    })
    .slice(0, _count)
    .map(([node])=>node);

    return (
        <Wrapper
            viusage={props.viusage||"wrap"}
            emphasis={400}
            classNames={[...!props.overrideClasses ? MENS_COLLEGE_BASKETBALL_HEADER_CONTAINER_CLASSNAMES : [], ...props.classNames||[]]}
            style={{...!props.overrideStyle ? MENS_COLLEGE_BASKETBALL_HEADER_CONTAINER_STYLE : {}, ...props.style}}>
            <div
            className={[...!props.overrideClasses ? MENS_COLLEGE_BASKETBALL_HEADER_INNER_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
            style={{...!props.overrideStyle ? MENS_COLLEGE_BASKETBALL_HEADER_INNER_STYLE : {}, ...props.style}}>
                <LeftRight
                    Left={<div className="flex hover-underline" style={{
                        alignContent : "center",
                        alignItems : "center"
                    }}>
                        <SportsBasketball/>&emsp;Men's College Basketball
                    </div>}
                    Right={<Snu 
                            searchBarInputProps={{
                                onChange : onSearchBarChange,
                                onBlur : onSearchBarBlur
                            }}
                        SearchBarEntries={searchEntries}
                    />}/>
            </div>
        </Wrapper>
    )
};