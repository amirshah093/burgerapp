import React from 'react';
import styles from './order.module.css'


const Order =(props)=>{
    let ingediants = [];
    for ( let ingediantsName in props.ingediants){
        ingediants.push({
            name: ingediantsName,
            amount: props.ingediants[ingediantsName]
        })
    }

    const ingediantsOutput = ingediants.map(ig=>{
        return <span style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                border: '1px solid #ccc',
                margin: '0 8px',
                padding: '5px'
        }} key={ig.name}> {ig.name} ({ig.amount})</span>
    })
    return(
        <div className={styles.Order}>
            <p>Salad: 1</p>
            <p>{ingediantsOutput}<strong>
            {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    )
}

export default Order;