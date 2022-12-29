import { Tablelike } from "../../../components/output/indicators/table/Table";

export interface Efficiencylike {
    "* Team Name" : string;
    "Offensive Efficiency" : number;
    "Defensive Efficiency" : number;
    "Tempo Predictions" : number;
}

export const EfficiencyData : Efficiencylike[] = [
    {
        "* Team Name" : "Duke",
        "Offensive Efficiency" : 102.3,
        "Defensive Efficiency" : 92.1,
        "Tempo Predictions" : 96.8
    },
    {
        "* Team Name" : "UNC",
        "Offensive Efficiency" : 103.3,
        "Defensive Efficiency" : 94.7,
        "Tempo Predictions" : 91.9
    },
    {
        "* Team Name" : "Maryland",
        "Offensive Efficiency" : 94.6,
        "Defensive Efficiency" : 93.1,
        "Tempo Predictions" : 80.2
    },
    {
        "* Team Name" : "SJSU",
        "Offensive Efficiency" : 72.0,
        "Defensive Efficiency" : 83.4,
        "Tempo Predictions" : 92.3
    },
    {
        "* Team Name" : "Georgetown",
        "Offensive Efficiency" : 88.4,
        "Defensive Efficiency" : 90.9,
        "Tempo Predictions" : 75.8
    },
    {
        "* Team Name" : "USC",
        "Offensive Efficiency" : 88.6,
        "Defensive Efficiency" : 94.3,
        "Tempo Predictions" : 87.1
    },
    {
        "* Team Name" : "Alabama",
        "Offensive Efficiency" : 92.3,
        "Defensive Efficiency" : 82.1,
        "Tempo Predictions" : 96.7
    },
    {
        "* Team Name" : "Michigan",
        "Offensive Efficiency" : 104.5,
        "Defensive Efficiency" : 92.7,
        "Tempo Predictions" : 96.8
    },
    {
        "* Team Name" : "Michigan State",
        "Offensive Efficiency" : 92.3,
        "Defensive Efficiency" : 88.1,
        "Tempo Predictions" : 93.4
    },
    {
        "* Team Name" : "Whichita State",
        "Offensive Efficiency" : 105.0,
        "Defensive Efficiency" : 87.9,
        "Tempo Predictions" : 102.3
    }
] 

export const EfficienyTable : Tablelike = {
    head : [],
    data : EfficiencyData,
    toReact : {},
    compare : {}
}

export interface EfficiencyTrendlike {
    "Offensive Efficiency" : number;
    "Offensive Efficiency Trend" : number;
    "Defensive Efficiency" : number;
    "Defensive Trend" : number;
    "Tempo Predictions" : number;
}

export const EfficiencyTrendData : EfficiencyTrendlike[ ] = [
    {
        "Offensive Efficiency Trend" : null as unknown as number,
        "Offensive Efficiency" : null as unknown as  number,
        "Defensive Efficiency" : null as unknown as number,
        "Defensive Trend" : null as unknown as number,
        "Tempo Predictions" : null as unknown as number
    }
]

export const EfficiencyTrendTable : Tablelike = {
    head : [],
    data : EfficiencyTrendData,
    toReact : {},
    compare : {}
}