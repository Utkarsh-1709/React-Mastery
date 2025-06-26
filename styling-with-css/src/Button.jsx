import React from 'react'
import styles from './Button/Button.module.css'
function Button() {
  return (
    // <button className="button">Click Me</button>   //External CSS
    <button className={styles.button}>Click Me</button> //Modules
  )
}

export default Button