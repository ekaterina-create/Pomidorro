export const DECREASE_TIME = "DECREASE_TIME"

export const decreaseTime = (count:number, id:number) => ({
   type:DECREASE_TIME,
   payload:count,
   id,
});