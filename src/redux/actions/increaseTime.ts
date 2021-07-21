export const INCREASE_TIME = "INCREASE_TIME"

export const increaseTime = (count:number, id:number) => ({
   type: INCREASE_TIME,
   payload:count,
   id,
});