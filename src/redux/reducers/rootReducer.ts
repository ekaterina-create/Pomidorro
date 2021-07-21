import { Reducer } from 'redux';
import { DECREASE_TIME } from '../actions/decreaseTime';
import { changeTotalTime } from './../../helpers';
import { ADD_TASK } from './../actions/addTask';
import { DELETE_TASK } from './../actions/deleteTask';
import { EDIT_TASK } from './../actions/editTask';
import { INCREASE_TIME } from './../actions/increaseTime';
import { MOVE_TASK } from './../actions/moveTask';

type TaskType = {
   id: number, 
   text: string, 
   counter: number
};

export type RootState = {
   tasks: Array<TaskType>;
   totalTime: number;
}

export const initialState: RootState = {
   tasks: [],
   totalTime: 0
}

const findIndex = (id: number, arr: Array<{ id: number, text: string, counter: number }>) => {
   return arr.findIndex(el => el.id === id);
  }

const editArr = (arr: Array<TaskType>, i:number, editedObj:TaskType) => {
   return  [...arr.slice(0, i), editedObj, ...arr.slice(i + 1)];
}

export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
   const { tasks, totalTime } = state;
   
    switch (action.type) {
      case ADD_TASK:
         const newObj = {
            'id': Math.floor(Math.random() * 100000),
            'text': action.text,
            'counter': 1
         }
         const newTasks = [
            ...tasks,
            newObj
         ]
         return {
            ...state,
            tasks: newTasks,
            totalTime: changeTotalTime(totalTime, 25)
         }
      case DELETE_TASK:
         const deleteInx = findIndex(action.payload, tasks);
          const newArr = [...tasks.slice(0, deleteInx), ...tasks.slice(deleteInx + 1)];
          
         return {
            ...state,
            tasks: newArr,
            totalTime: changeTotalTime(totalTime, -25)
         }
      case EDIT_TASK:
         const editInx = findIndex(action.payload.id, tasks);
         const editedObj = {...tasks[editInx], 'text':action.payload.text};
         const editedArr = editArr(tasks, editInx, editedObj);
         
         return {
            ...state,
            tasks: editedArr,
         }
      case INCREASE_TIME:
           const increaseInx = findIndex(action.id, tasks);
           const currObj = {...tasks[increaseInx], 'counter':tasks[increaseInx].counter + 1}
           const editedTasks = editArr(tasks, increaseInx, currObj); 

         return {
            ...state,
            totalTime: totalTime + action.payload,
            tasks: editedTasks
         }
      case DECREASE_TIME:
         const decreaseInx = findIndex(action.id, tasks);
         let newTaskObj;
         let newTotalTime;
         tasks[decreaseInx].counter > 1 ? newTaskObj = {...tasks[decreaseInx], 'counter':tasks[decreaseInx].counter - 1} : newTaskObj = tasks[decreaseInx];
         tasks[decreaseInx].counter > 1 ? newTotalTime = totalTime + action.payload : newTotalTime = totalTime
         const modifiedTasks = editArr(tasks, decreaseInx, newTaskObj); 
         return {
            ...state,
            totalTime: newTotalTime,
            tasks: modifiedTasks
         }
         case MOVE_TASK:
         const movedTasks = action.payload;  
         
         return {
            ...state,
            tasks:movedTasks
         }
      default:
         return state
   }
}

