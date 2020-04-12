import React from 'react';
import Aux from '../../HOC/Auxelary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modele from '../../components/UI/Modele/Modele';
import OrderSamary from '../../components/Burger/OrderSamary/OrderSamary';
import axios from '../../Axios.js'
import Spinner from '../../components/UI/Spinner/Spinner';
import ErrorHandler from '../../HOC/ErrorHandler/ErrorHandler';

const INGREDIANT_PRICE = {
    salad: 0.5,
    cheese: 4,
    meat: 8,
    bacon: 4.99

}

class BurgerBuilder extends React.Component{

    state = {
        ingediants: null,
        totalPrice: 0,
        purchasable: false,
        purgchasing: false,
        loading: false,
        error: false,
    }

    componentDidMount(){
        axios.get('https://react-burger-76a4b.firebaseio.com/ingediants.json' )
        .then(res => {
            this.setState({ingediants: res.data})
        })
        .catch(error =>{
            this.setState({error: true})
        })
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

        const queryProms = [];
        for (let i in this.state.ingediants){
            queryProms.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingediants[i]))
        }
        queryProms.push('price=' + this.state.totalPrice);
        const queryString = queryProms.join('&');

        this.props.history.push({
            pathname: '/checkout',
            search: '?'+ queryString 

        });
        
    }

    render() {
        const disabledInfo ={
            ...this.state.ingediants
        };
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        
        let oderSummary = null;
        let burger = this.state.error ? <p>ingrediant can't be loaded</p> : <Spinner />
        if(this.state.ingediants) {
         burger = (
            <Aux>
                <Burger ingediants={this.state.ingediants} />
                <BuildControls 
                ingediantAdded={this.addIngrHand}
                ingediantRemove ={this.removeIngHand}
                disabledd = {disabledInfo}
                purchasable={this.state.purchasable}
                price={this.state.totalPrice}
                ordered={this.purchasingHandler} /> 
            </Aux> 
            );
       
            oderSummary =  <OrderSamary ingediantss ={this.state.ingediants}
            purchasCanceled={this.purchasCanselHandler}
            price={this.state.totalPrice} 
            purchasecontinue={this.purchaseContinueHandler} />;
         }
                if (this.state.loading){
                    oderSummary = <Spinner />;
                }

        return(
            <Aux>
                <Modele show={this.state.purgchasing} moduleClosed={this.purchasCanselHandler}>
                    {oderSummary}
                </Modele>
                {burger}

                 
            </Aux>
        );
    }
}

export default ErrorHandler (  BurgerBuilder , axios );