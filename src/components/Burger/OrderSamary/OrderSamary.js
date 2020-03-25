import React from 'react';
import Aux from '../../../HOC/Auxelary';
import Button from '../../UI/Buttons/Button';

const OrderSamary = (props) => {
    const ingrediantSummary = Object.keys(props.ingediantss).map(igKey => {
            return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingediantss[igKey]}
            </li>
        )
    });
    return (
            <Aux>
                <h3>Your Order</h3>
                <p>A deliciour burger with the following ingrediant</p>
                <ul>
                    {ingrediantSummary}
                </ul>

                <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
                <Button cliked={props.purchasCanceled} btnType='Danger'>CANCEL</Button>
                <Button cliked={props.purchasecontinue} btnType='Success'>CONTENUE</Button>

            </Aux>
        
    )
}

export default OrderSamary;
