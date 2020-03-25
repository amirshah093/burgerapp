import React from 'react';
import Aux from '../../HOC/Auxelary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modele from '../../components/UI/Modele/Modele';
import OrderSamary from '../../components/Burger/OrderSamary/OrderSamary';


const INGREDIANT_PRICE = {
    salad: 0.5,
    cheese: 4,
    meat: 8,
    bacon: 4.99

}

class BurgerBuilder extends React.Component{

    state = {
        ingediants: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 0,
        purchasable: false,
        purgchasing: false,
    }

    purchaseState = (ingediants) => {

    const sum = Object.keys(ingediants)
    .map(igKey =>{
        return ingediants[igKey];
    })
    .reduce((sum, el) =>{
       return sum + el; 
    }, 0);
    this.setState({purchasable: sum > 0});
};
    addIngrHand = (type) =>{
        const oldCount = this.state.ingediants[type];
        const updatCount =  oldCount +1;
        const updatIng = {
            ...this.state.ingediants
        };
        updatIng[type] = updatCount;
        const priceAddition = INGREDIANT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingediants: updatIng})
        this.purchaseState(updatIng);
    }
    
    removeIngHand = (type) =>{
        const oldCount = this.state.ingediants[type];
        if(oldCount <= 0) {
            return;
        }
        const updatCount =  oldCount -1;
        const updatIng = {
            ...this.state.ingediants
        };
        updatIng[type] = updatCount;
        const priceDedaction = INGREDIANT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDedaction;
        this.setState({totalPrice: newPrice, ingediants: updatIng})
        this.purchaseState(updatIng);
    }

    purchasingHandler =() =>{
        this.setState({
            purgchasing: true
        })
    };

    purchasCanselHandler = () => {
        this.setState({ purgchasing: false});
    }

    purchaseContinueHandler = () =>{
        alert('ahaha this is purchase handler ')
    }

    render() {
        const disabledInfo ={
            ...this.state.ingediants
        };
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return(
            <Aux>
                <Modele show={this.state.purgchasing} moduleClosed={this.purchasCanselHandler}>
                    <OrderSamary ingediantss ={this.state.ingediants}
                    purchasCanceled={this.purchasCanselHandler}
                    price={this.state.totalPrice} 
                    purchasecontinue={this.purchaseContinueHandler} />
                </Modele>
                <Burger ingediants={this.state.ingediants} />
                <BuildControls 
                ingediantAdded={this.addIngrHand}
                ingediantRemove ={this.removeIngHand}
                disabledd = {disabledInfo}
                purchasable={this.state.purchasable}
                price={this.state.totalPrice}
                ordered={this.purchasingHandler}

                 />
            </Aux>
        );
    }
}

export default BurgerBuilder;