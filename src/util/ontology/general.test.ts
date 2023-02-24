import { ontology } from "..";
import { getBracketOfTeams } from "./general";
import { MockAway, MockHome } from "./ncaab";

describe("Bracket building", ()=>{

    test("getBracketOfTeams: 4 teams", async ()=>{

        const teams : ontology.Teamlike[] = [
            MockAway,
            MockAway,
            MockHome,
            MockHome
        ];

        const bracket = getBracketOfTeams(teams);

        console.log(bracket);

    });

    test("getBracketOfTeams: 8 teams", async ()=>{

        const teams : ontology.Teamlike[] = [
            MockAway,
            MockAway,
            MockHome,
            MockHome,
            MockAway,
            MockAway,
            MockHome,
            MockHome
        ];

        const bracket = getBracketOfTeams(teams);

        console.log(bracket);

    });

    test("getBracketOfTeams: 16 teams", async ()=>{

        const teams : ontology.Teamlike[] = [
            MockAway,
            MockAway,
            MockHome,
            MockHome,
            MockAway,
            MockAway,
            MockHome,
            MockHome,
            MockAway,
            MockAway,
            MockHome,
            MockHome,
            MockAway,
            MockAway,
            MockHome,
            MockHome
        ];

        const bracket = getBracketOfTeams(teams);

        console.log(bracket);

    });


})