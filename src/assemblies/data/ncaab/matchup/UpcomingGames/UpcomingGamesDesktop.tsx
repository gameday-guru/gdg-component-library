import React, { FC, useState } from "react";
import { Wrapper } from "../../../../../components";
import { Pill } from "../../../../../components";
import { ontology } from "../../../../../util";
import { MockProjectedGame } from "../../../../../util/ontology";
import { TeamMatchupRowProjection } from "../TeamMatchupRowProjection";
import { FilterSet } from "../../../../../components/output/containers/filter";
import { Viusagelike } from "../../../../../util/viusage/primary";
import { useOnceProcessor } from "../../../../../logic/processing/react/reactProcessor";
import MatchupCalendar from "../MatchupCalendar/MatchupCalendar";
import { formatDate } from "../../generic/FormatDate/formatDate";

export const UPCOMING_GAMES_DESKTOP_CONTAINER_CLASSNAMES: string[] = [
  "rounded-lg",
  "p-4",
];
export const UPCOMING_GAMES_DESKTOP_CONTAINER_STYLE: React.CSSProperties = {};

export const UPCOMING_GAMES_DESKTOP_INNER_CLASSNAMES: string[] = [];
export const UPCOMING_GAMES_DESKTOP_INNER_STYLE: React.CSSProperties = {
  textAlign: "left",
};

export type UpcomingGamesDesktopProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  overrideStyle?: boolean;
  classNames?: string[];
  overrideClasses?: boolean;
  responsive?: boolean;
  which?: string;
  games?: ontology.ProjectedGamelike[];
  onTeamClick?: (teamId: string) => Promise<void>;
  onMatchupClick?: (gameId: string) => Promise<void>;
  options?: string[];
  viusage?: Viusagelike;
  Title?: React.ReactNode;
  presets?: {
    [key: string]: (
      table: ontology.ProjectedGamelike[]
    ) => Promise<ontology.ProjectedGamelike[]>;
  };
  stackedGamblers?: boolean;
};

export const UpcomingGamesDesktop: FC<UpcomingGamesDesktopProps> = (props) => {
  let userSelectedGames = null;
  const { getProjectedGamesTable } = useOnceProcessor();
  const [selectedDate, setSelectedDate] = useState<string>("");

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);

    // Get the projected games for the selected date
    userSelectedGames = getProjectedGamesTable(new Date(date));

    const sortedGames =
      userSelectedGames &&
      Object.values(userSelectedGames).sort((gameA, gameB) => {
        return (
          new Date(gameA.game.DateTimeUTC || gameA.game.Day).getTime() -
          new Date(gameB.game.DateTimeUTC || gameB.game.Day).getTime()
        );
      });
    // Update the upcoming games
    setUpcomingGamesDesktop(sortedGames || []);
  };

  const [renderCount, setRenderCount] = useState(100);

  const _gameProjections =
    userSelectedGames || props.games || Array(10).fill(MockProjectedGame);

  const [upcomingGames, setUpcomingGamesDesktop] = useState(_gameProjections);

  const gameProjections = upcomingGames
    .slice(0, renderCount)
    .map((entry, i) => {
      return (
        <TeamMatchupRowProjection
          stackedGamblers={props.stackedGamblers}
          onMatchupClick={props.onMatchupClick}
          onTeamClick={props.onTeamClick}
          key={entry.game.GameID + `x${i}`}
          home={entry.home}
          away={entry.away}
          game={entry.game}
          gameProjection={entry.gameProjection}
        />
      );
    });

  return (
    <Wrapper
      viusage={props.viusage || "wrap"}
      classNames={[
        ...(!props.overrideClasses
          ? UPCOMING_GAMES_DESKTOP_CONTAINER_CLASSNAMES
          : []),
        ...(props.classNames || []),
      ]}
      style={{
        ...(!props.overrideStyle ? UPCOMING_GAMES_DESKTOP_CONTAINER_STYLE : {}),
        ...props.style,
      }}
    >
      <div
        className={[
          ...(!props.overrideClasses
            ? UPCOMING_GAMES_DESKTOP_INNER_CLASSNAMES
            : []),
          ...(props.classNames || []),
        ].join(" ")}
        style={{
          ...(!props.overrideStyle ? UPCOMING_GAMES_DESKTOP_INNER_STYLE : {}),
          ...props.style,
        }}
      >
        <div>
          <FilterSet
            presets={props.presets}
            table={_gameProjections}
            setTable={async (table) => {
              setUpcomingGamesDesktop(table);
            }}
            fieldCase={{
              "Team Name": ["TEXT"],
            }}
            Title={props.Title}
          />
          {/* Use the MatchupCalendar component to allow the user to select a date */}
          <div className="flex items-center mb-4">
            <h1 className="text-xl" style={{ marginRight: "20px" }}>
              {formatDate(selectedDate ? selectedDate : new Date().toString())}
            </h1>
            <MatchupCalendar onDateSelect={handleDateSelect} />
          </div>
        </div>
        <br />
        <hr />
        <br />
        <div className="grid gap-4">{gameProjections.length > 0 ? gameProjections : "No games available for selected date."}</div>
      </div>
    </Wrapper>
  );
};
