import React from 'react';
import styles from './Button.module.css'

const Button = (props) => (
    <button 
    className={[styles.Button, styles[props.btnType]].join(' ')} 
    onClick={props.cliked}>{props.children}</button>
)


export default Button
