import React, { FC, ReactElement, useState, useEffect } from 'react';
import { Wrapper } from '../../../../components';
import { viusage } from '../../../../util';
import { MensCollegeBasketballHeader } from '../../header';
import { ontology } from '../../../../util';
import { NcaabTournamentBracket } from '../../../data/ncaab/tournament/NcaabTournamentBracket';
import { NcaaMarchMadnessTemplatedBracket } from '../../../data/ncaab/tournament/NcaabMarchMadnessTemplatedBracket/NcaaMarchMadnessTemplatedBracket';
import { BracketByRoundlike } from '../../../../util/rpc';
import { Button } from '../../../../components';
import { deleteBracket } from '../../../../util/firebase';
import { useOnceProcessor } from '../../../../logic/processing/react/reactProcessor';

export const HOME_CONTENT_CONTAINER_CLASSNAMES: string[] = [];
export const HOME_CONTENT_CONTAINER_STYLE: React.CSSProperties = {};

export const HOME_CONTENT_INNER_CLASSNAMES: string[] = [];
export const HOME_CONTENT_INNER_STYLE: React.CSSProperties = {};

export type MyBracketsContentProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    overrideStyle?: boolean;
    classNames?: string[];
    overrideClasses?: boolean;
    responsive?: boolean;
    viusage?: viusage.primary.Viusagelike;
    gameOfTheDay?: ontology.ProjectedGamelike;
    top25Games?: ontology.ProjectedGamelike[];
    apTop25Teams?: ontology.RankTrendTeamlike[];
    gdgTop25Teams?: ontology.RankTrendTeamlike[];
    onTeamClick?: (teamId: string) => Promise<void>;
    onMatchupClick?: (gameId: string) => Promise<void>;
    headerProjectedGames?: ontology.ProjectedGamelike[];
    headerTeams?: ontology.Teamlike[];
    onBlogClick?: (id: string) => Promise<void>;
    onAccountClick?: () => Promise<void>;
    brackets?: ontology.IdSparseBracketlike[];
    onBracketIdClick?: (id: string) => Promise<void>;
    teams?: { [key: string]: ontology.Teamlike };
};

export const MyBracketsContent: FC<MyBracketsContentProps> = (props) => {
    const [brackets, setBrackets] = useState(props.brackets || []);

    const handleDeleteBracket = async (id: string, index: number) => {
        setBrackets(brackets => brackets.map((bracket, i) => {
            if (i === index) {
                return { ...bracket, deleting: true };
            }
            return bracket;
        }));

        try {
            await deleteBracket({ _id: id });
            setBrackets(brackets => brackets.filter(bracket => bracket._id !== id));
        } catch (error) {
            console.error("Error deleting bracket:", error);
            setBrackets(brackets => brackets.map((bracket, i) => {
                if (i === index) {
                    return { ...bracket, deleting: false };
                }
                return bracket;
            }));
        }
    };

    useEffect(() => {
        if (props.brackets) {
            setBrackets(props.brackets);
        }
    }, [props.brackets]);

    const bracketEntries = brackets.map((bracket, index) => {
        return (
            <div className="flex items-center justify-between gap-2" key={bracket._id}>
                <div>
                    <Button
                        viusage={'navigate'}
                        style={{ width: '700px' }}
                        onClick={async () => {
                            if (props.onBracketIdClick) {
                                await props.onBracketIdClick(bracket._id);
                            }
                        }}
                    >
                        Bracket #{index + 1} Prediction: {bracket.champion && props.teams?.[bracket.champion]
                            ? `${props.teams?.[bracket.champion].School} wins!`
                            : "No winner selected"}
                    </Button>
                </div>
                <div>
                    {!bracket.deleting &&
                        <Button
                            style={{ backgroundColor: 'red' }}
                            onClick={async () => {
                                await handleDeleteBracket(bracket._id, index);
                            }}
                        >
                            Delete
                        </Button>
                    }
                    {bracket.deleting &&
                        <Button style={{ backgroundColor: 'gray' }}>
                            Deleting...
                        </Button>
                    }
                </div>
            </div>
        );
    });

    return (
        <Wrapper
            viusage={props.viusage || "backdrop"}
            classNames={[...!props.overrideClasses ? HOME_CONTENT_CONTAINER_CLASSNAMES : [], ...(props.classNames || [])]}
            style={{ ...!props.overrideStyle ? HOME_CONTENT_CONTAINER_STYLE : {}, ...props.style }}
        >
            <div
                className={[...!props.overrideClasses ? HOME_CONTENT_INNER_CLASSNAMES : [], ...(props.classNames || [])].join(" ")}
                style={{ ...!props.overrideStyle ? HOME_CONTENT_INNER_STYLE : {}, ...props.style }}
            >
                <div>
                    <MensCollegeBasketballHeader
                        onAccountClick={props.onAccountClick}
                        onTeamClick={props.onTeamClick}
                        onMatchupClick={props.onMatchupClick}
                        teams={props.headerTeams}
                        projectedGames={props.headerProjectedGames}
                    />
                </div>
                <div className='p-4' style={{ textAlign: "left" }}>
                    <div className="flex justify-between items-center p-4">
                        <div>
                            <h2 className='text-2xl'>My Brackets</h2>
                        </div>
                        <div className="right-align" style={{ marginLeft: '30px' }}>
                            <Button
                                viusage={'navigate'}
                                onClick={async () => {
                                    window.location.href = "/brackets";
                                }}
                            >
                                Create New Bracket
                            </Button>
                        </div>
                    </div>
                    <hr />
                    <br />
                    <div className='gap-2' style={{ display: "grid", alignContent: "center" }}>
                        {bracketEntries}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};
