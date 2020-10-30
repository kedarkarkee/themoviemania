import {MovieType} from "../interfaces/state";

export const minuteFormat = (minutes: number): string => {
    const hour = parseInt(String(minutes / 60));
    const remainingMinutes = minutes - hour * 60;
    return hour + 'h ' + remainingMinutes + 'm';
}

export const movieTypeToString = (type: MovieType): string => {
   return type.split("_").map(t=>t.charAt(0).toUpperCase() + t.slice(1)).join(" ");
}