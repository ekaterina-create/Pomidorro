import React from 'react';
import styles from './main.module.css'

export interface IMainProps  { 
   children: React.ReactNode
}

function Main({children}:IMainProps) {
   return (
      <div className={styles.main}>
         <div className={styles.container}>
         {children}
         </div>
      </div>
   )
}

export default Main
