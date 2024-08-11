"use client"

import styles from './DarkModeToggle.module.css';
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';




export default function DarkModeToggle() {
  const {mode, toggle} = useContext(ThemeContext);

  return (
    <div className={styles.container} >
        <div className={styles.icon}> 🌑 </div>
        <div className={styles.icon}> ☀️ </div>
        <div
          className={styles.switcher} onClick={toggle}
          style = {mode === "light" ? {left: "2px"} : {right:"2px"}} />

    </div>
    
  )
}
