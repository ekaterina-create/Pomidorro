import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import TaskItem from '../TaskItem/TaskItem';
import { deleteTask } from './../../redux/actions/deleteTask';


function TasksList() {
   const state = useSelector((state: RootState) => state);
   const { tasks, totalTime } = state;
   const dispatch = useDispatch();

   const onDeleteTask = (id: number) => {
      dispatch(deleteTask(id))
   }

   const taskItem = tasks.map((task) => {
      return (<TaskItem key={Math.random().toString(36).substr(0, 5)} text={task.text} id={task.id} onDeleteTask={onDeleteTask} />)
   })
   return (
      <div>
         {taskItem}
         <div>{totalTime > 0 ? `${totalTime} мин` : ''}</div>
      </div>
   )
}

export default TasksList
