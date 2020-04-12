import React from 'react';
import Burger from '../Burger/Burger';
import Button from '../UI/Buttons/Button';
import styles from './checkoutSummary.module.css';

const CheckoutSummary = (props) => {
    return (
        <div className={styles.CheckoutSummary}>
            <h1>We hope testes will fine</h1>
            <div style={{width: '100%', height: '300px', margin: 'auto'}}>
                <Burger ingediants={props.ingediants} />
            </div>
            <Button btnType='Danger' cliked={props.canseled}>Cancel</Button>
            <Button btnType='Success' cliked={props.contenued} >Contenue</Button>
        </div>
    );
} 

export default CheckoutSummary;
