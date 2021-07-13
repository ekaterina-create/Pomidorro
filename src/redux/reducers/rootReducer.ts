import { Reducer } from 'redux';
import { changeTotalTime } from './../../helpers';



export type RootState = {
   tasks: Array<{ id: number, text: string }>;
   totalTime: number;
}

export const initialState: RootState = {
   tasks: [],
   totalTime: 0
}


export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
   switch (action.type) {
      case "ADD_TASK":
         const newObj = {
            'id':  Math.floor(Math.random() * 100000),
            'text': action.text
         }
         const newTasks = [
            ...state.tasks,
            newObj
         ]
         return {
            ...state,
            tasks: newTasks,
            totalTime: changeTotalTime(state.totalTime, 25)
         }
      case "DELETE_TASK":
         const id = action.payload
         const i = state.tasks.findIndex(el => el.id === id)
         const newArr = [...state.tasks.slice(0, i), ...state.tasks.slice(i + 1)];

         return {
            ...state,
            tasks: newArr,
            totalTime: changeTotalTime(state.totalTime, -25)
         }
      case "INCREASE_TIME":
         const newTotalTime = state.totalTime + action.payload
         return {
            ...state,
            totalTime: newTotalTime
         }
      default:
         return state
   }
}

