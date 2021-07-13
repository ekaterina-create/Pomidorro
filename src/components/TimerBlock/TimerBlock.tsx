import React from 'react'
import styles from './timerBlock.module.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';

function TimerBlock() {
   const tasks = useSelector(({tasks}: RootState) => tasks);


   return (
      <div className={styles.timerBlock}>
         <div className={styles.header}><span>{tasks.length > 0 ? tasks[0].text : ''}</span><span>Помидор 1</span></div>
         <div className={styles.bottom}>
            <div className={styles.timer}>
               <span>25 : 00</span>
            <button>
               <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="25" cy="25" r="25" fill="#899441" />
                  <path d="M26.2756 26.1321V33H23.7244V26.1321H17V23.7029H23.7244V17H26.2756V23.7029H33V26.1321H26.2756Z" fill="white" />
               </svg>
            </button>
            </div>
            <div className={styles.task}><span>{tasks.length > 0 ? `Задача 1 -${tasks[0].text}`: ''}</span></div>
            <div className={styles.buttonsGroup}><button>Старт</button><button>Стоп</button></div>
         </div>
      </div>
   )
}

export default TimerBlock
