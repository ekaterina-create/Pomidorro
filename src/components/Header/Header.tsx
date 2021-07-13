import React from 'react'
import styles from './header.module.css';
import tomato from '../../assets/img/tomato.png';
import equalizer from '../../assets/img/equalizer.png';

function Header() {
   return (
      <header className={styles.header}>
      <div className={styles.container}>
         <div className={styles.item}> <img className={styles.logo} src={tomato} alt="" /><span>pomodoro_box</span></div>
       <div className={styles.item}><img className={styles.equalizer} src={equalizer} alt="" /><span>Статистика</span></div>
      </div>
      </header>
   )
}

export default Header
