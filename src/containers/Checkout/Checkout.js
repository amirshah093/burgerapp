import React from 'react';
import styles from './checkout.module.css';
import CheckoutSummary from '../../components/CheckoutSummay/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from '../../containers/Checkout/ContactData/ContactData'


class Checkout extends React.Component{
    state = {
        ingediants: null,
        price: 0,
    }

    componentWillMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingediants  = {};
        let price = 0;
        for (let param of query.entries()){
            if(param[0] === 'price') {
                price = param[1];
            }else {

                ingediants[param[0]] = +param[1];
            }
        }
        this.setState({ingediants: ingediants, totalPrice: price})
    }
    canseledHandler =() =>{
        this.props.history.goBack();
    }
    contenuedHandler =() =>{
        this.props.history.replace('/checkout/contact-data')
    }
    render(){
        return(
            <div className={styles.Checkout}>
                <CheckoutSummary 
                ingediants={this.state.ingediants}
                canseled={this.canseledHandler} 
                contenued={this.contenuedHandler} 

                />
                <Route path={this.props.match.path + '/contact-data'} 
                render={(props) => (<ContactData ingediants={this.state.ingediants} price={this.state.totalPrice} {...props} />)} />
            </div>
        );
    }
};

export default Checkout;