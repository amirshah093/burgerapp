import React from 'react';
import Aux from '../../HOC/Auxelary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


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
        totalPrice: 4
    }

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
                
                <Burger ingediants={this.state.ingediants} />
                <BuildControls 
                ingediantAdded={this.addIngrHand}
                ingediantRemove ={this.removeIngHand}
                disabledd = {disabledInfo}

                 />
            </Aux>
        );
    }
}

export default BurgerBuilder;