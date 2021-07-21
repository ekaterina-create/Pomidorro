import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import TaskItem from '../TaskItem/TaskItem';
import { deleteTask } from './../../redux/actions/deleteTask';
import styles from './tasksList.module.css'
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { moveTask } from '../../redux/actions/moveTask';


function TasksList() {
   const state = useSelector((state: RootState) => state);
   const { totalTime } = state;
   const dispatch = useDispatch();

   const onDeleteTask = (id: number) => {
      dispatch(deleteTask(id))
   }

   const handleOnDragEnd = (result: DropResult) => {
      console.log(result.source.index)
      if (!result.destination) return
         const items = state.tasks.map(item => item)
         const [reorderedItems] = items.splice(result.source.index, 1);
             console.log(reorderedItems)
            items.splice(result.destination.index, 0, reorderedItems);
            dispatch(moveTask(items))
      }

   return (
      <div>
         <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId='tasks'>
               {(provided) => (
                  <ul className={styles.list} {...provided.droppableProps} ref={provided.innerRef}>
                     {state.tasks.map(({id, text}, index) => {
                        return (
                          <TaskItem text={text} id={id} onDeleteTask={onDeleteTask} innerRef={provided.innerRef} key={id} index={index}/>
                              )
                          
                     })}
                     {provided.placeholder}
                  </ul>
               )}
            </Droppable>
         </DragDropContext>
         <div>{totalTime > 0 ? `${totalTime} мин` : ''}</div>
      </div>
   )
}

export default TasksList
