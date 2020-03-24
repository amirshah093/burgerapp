import React from 'react'
import styles from './buildControl.module.css'

const BuildControl = (props) => {
    return (
        <div className={styles.BuildControl}>
            <div className={styles.Label}>{props.label}</div>
            <button onClick={props.remove} disabled={props.disabledd} className={styles.Less}>Less</button>
            <button onClick={props.added}  className={styles.More}>More</button>
        </div>
    )
}

export default BuildControl;
