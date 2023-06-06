import { data } from "./ships-data";

function compareArrays (arrayToCompare: string[], baseArray: string[]): boolean {
    let isEqual = true;

    for(let i of arrayToCompare) {
        if(!baseArray.includes(i)) {
            isEqual = false;
            break;
        }
    }

    return isEqual;
}

function compareTripLength(targetLength: number, shipDuration: number[]) {
    return shipDuration.includes(targetLength) ? true : false;
}

function compareBuildYear(targetYear: number, shipBuildYear: string) {
    if(shipBuildYear === 'TBA') return;

    const shipBuildYearToNumber = Number(shipBuildYear);
    const targetYearToNumber = Number(targetYear);

    return shipBuildYearToNumber >= targetYearToNumber ? true : false; 
}

export { compareArrays, compareTripLength, compareBuildYear };