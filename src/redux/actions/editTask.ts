export const EDIT_TASK = "EDIT_TASK";

export const editTask = (id:number, text:string) => ({
   type:EDIT_TASK,
   payload:{
      id,
      text
   }   
});