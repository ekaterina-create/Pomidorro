export const DELETE_TASK = "DELETE_TASK";

export const deleteTask = (id:number) => ({
   type:DELETE_TASK,
   payload:id
});