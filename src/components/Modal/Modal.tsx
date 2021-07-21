import React, { ChangeEvent,FormEvent, useState } from 'react'
import styles from './modal.module.css'
import { useDispatch } from 'react-redux';
import { editTask } from '../../redux/actions/editTask';

interface IModalProps {
   id:number;
   handleClose:() => void;
}

function Modal({id, handleClose }:IModalProps) {
   const [value, setValue] = useState('');
   const dispatch = useDispatch();

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    }
  
    const handleSubmit = (event: FormEvent) => {
      event.preventDefault();
      dispatch(editTask(id, value))
      setValue('')
      
    }

   return (
      <div className={styles.modal}>
         <div className={styles.modal__content}>
            <button className={styles.close} onClick={handleClose}><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M19.7991 3.05176e-05L20.7419 0.942838L0.94289 20.7418L8.27312e-05 19.799L19.7991 3.05176e-05Z" fill="#ADADAD" />
               <path d="M20.7418 19.799L19.799 20.7418L2.47121e-05 0.942798L0.942833 -1.04904e-05L20.7418 19.799Z" fill="#ADADAD" />
            </svg>
            </button>
            <form action="submit" onSubmit={handleSubmit}>
               <h2 className={styles.modal__title}>Введите новое название дела</h2>
               <input type="text" value={value} onChange={handleChange} required/>
               <button className={styles.modal__btn}>Изменить</button>
            </form>
         </div>
      </div>
   )
}

export default Modal
