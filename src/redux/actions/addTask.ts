export const ADD_TASK = "ADD_TASK"

export const addTask = (text:string) => ({
   type:ADD_TASK,
   text
});