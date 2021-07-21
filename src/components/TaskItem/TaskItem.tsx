import React, { useState } from 'react'
import styles from './taskItem.module.css';
import DropDown from '../Dropdown/Dropdown';
import Modal from '../Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { increaseTime } from './../../redux/actions/increaseTime';
import { RootState } from '../../redux/reducers/rootReducer';
import { decreaseTime } from '../../redux/actions/decreaseTime';
import { Draggable } from 'react-beautiful-dnd';

interface ITaskItemProps {
   isOpen?: boolean;
   text: string;
   id: number;
   onDeleteTask: (id: number) => void;
   innerRef:any;
   index:number;
}


function TaskItem({ isOpen, text, id, onDeleteTask, index}: ITaskItemProps) {
   const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
   const [editInputOpen, setEditInputOpen] = useState(false);
   const dispatch = useDispatch();
   const tasks = useSelector(({tasks}: RootState) => tasks);
   const currentItem = tasks.find(task => task.id === id)
  
   React.useEffect(() => {
  
      let isMounted = true;
      setIsDropdownOpen(isOpen)
   // eslint-disable-next-line
      return () => {isMounted = false}
   }, [isOpen]);
   

   const handleOpen = () => {
      if (isOpen === undefined) {
         setIsDropdownOpen(!isDropdownOpen)
      }
   }
   const onClose = () => {
      setIsDropdownOpen(!isDropdownOpen)
   }
   const handleClose = () => {
      setEditInputOpen(!setEditInputOpen)
   }
   const increaseItem = () => {
       dispatch(increaseTime(25, id));
    }
   const decreaseItem = () => {
        dispatch(decreaseTime(-25, id));
    }
   const deleteItem = () => {
        onDeleteTask(id)
   }
   const editItem = () => {
      setEditInputOpen(true)
   }
   return (
      <Draggable key={id} draggableId={id.toString()} index={index}>
  {(provided) => (
    <div className={styles.item} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
    <div>
       <div className={styles.number}>{currentItem?.counter}</div>
       <span className={styles.text}>{text}</span>
       {editInputOpen && (<Modal id={id} handleClose={handleClose}/>)}
    </div>
    <div className={styles.menu}>
       <button className={styles.button} onClick={handleOpen}>
          <svg width="26" height="6" viewBox="0 0 26 6" fill="none" xmlns="http://www.w3.org/2000/svg">
             <circle cx="3" cy="3" r="3" fill="#C4C4C4" />
             <circle cx="13" cy="3" r="3" fill="#C4C4C4" />
             <circle cx="23" cy="3" r="3" fill="#C4C4C4" />
          </svg></button>
       {isDropdownOpen && (
          <div className={styles.dropdown} >
             <DropDown onClose={onClose} increaseItem={increaseItem} decreaseItem={decreaseItem} deleteItem={deleteItem} editItem={editItem}/>
          </div>
       )}
    </div>
 </div>
  )}
</Draggable>
   )
}

export default TaskItem
