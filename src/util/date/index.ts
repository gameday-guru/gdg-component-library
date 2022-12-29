export namespace DateComparison {

    export const sameDate = (a : Date, b : Date)=>{

        console.log(a, b);
        return a.getFullYear() === b.getFullYear()
        && a.getMonth() === b.getMonth()
        && a.getDate() === b.getDate();
    }
    

}