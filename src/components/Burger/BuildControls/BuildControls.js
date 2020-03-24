import React from 'react'
import styles from './buildControls.module.css'
import BuildControl from './BuildControl.js/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const BuildControls = (props) => {
    return (
        <div className={styles.BuildControls}>
            {controls.map(ctr =>(
                <BuildControl
                 key={ctr.label}
                  label={ctr.label}
                  
                added = {() => props.ingediantAdded (ctr.type)}
                remove = {() => props.ingediantRemove (ctr.type)}
                disabledd = {props.disabledd[ctr.type]}
                />

            ))}
        </div>
    )
}

export default BuildControls;
