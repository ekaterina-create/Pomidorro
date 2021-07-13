import React, { useState } from 'react'
import styles from './taskItem.module.css';
import DropDown from '../Dropdown/Dropdown';

interface ITaskItemProps {
   isOpen?: boolean;
   text: string;
   id: number;
   onDeleteTask: (id: number) => void;
}


function TaskItem({ isOpen, text, id, onDeleteTask }: ITaskItemProps) {
   const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
   React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
   const [counter, setCounter] = useState(1);


   const handleOpen = () => {
      if (isOpen === undefined) {
         setIsDropdownOpen(!isDropdownOpen)
      }
   }
   const onClose = () => {
      setIsDropdownOpen(!isDropdownOpen)
   }
   const increaseItem = () => {
      setCounter((counter) => counter + 1)

   }
   const decreaseItem = () => {
      setCounter((counter) => counter > 1 ? counter - 1 : 1)
   }
   const deleteItem = () => {
      onDeleteTask(id)
   }
   return (
      <div className={styles.item}>
         <div>
            <div className={styles.number}>{counter}</div>
            <span className={styles.text}>{text}</span>
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
                  <DropDown onClose={onClose} increaseItem={increaseItem} decreaseItem={decreaseItem} deleteItem={deleteItem} />
               </div>
            )}
         </div>
      </div>
   )
}

export default TaskItem
