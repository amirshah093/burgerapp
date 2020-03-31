import React from 'react'
import styles from './drowerToggle.module.css'

const DrowerToggle = (props) => {
    return (
        <div className={styles.SideDrower} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default DrowerToggle;
