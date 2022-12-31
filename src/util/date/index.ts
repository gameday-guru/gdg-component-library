export namespace DateComparison {

    export const sameDate = (a : Date, b : Date)=>{

        return a.getFullYear() === b.getFullYear()
        && a.getMonth() === b.getMonth()
        && a.getDate() === b.getDate();
    }
    

}