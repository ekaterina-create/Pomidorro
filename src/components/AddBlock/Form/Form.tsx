import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import styles from './form.module.css'
import { addTask } from './../../../redux/actions/addTask';

function Form() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event: FormEvent) => {
    dispatch(addTask(value))
    event.preventDefault();
    setValue('')
  }
  return (
    <form action="submit" className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.input} type="text" placeholder='Название задачи' value={value} onChange={handleChange} required/>
      <button className={styles.button}>Добавить</button>
    </form>
  )
}

export default Form
