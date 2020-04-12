import React from 'react';
import Order from './Order';
import axios from '../../Axios'
import ErrorHandler from '../../HOC/ErrorHandler/ErrorHandler';

class Orders extends React.Component{

    state ={
        orders: [],
        loading: true,
    }

    componentDidMount(){
        axios.get('/orders.json')
        .then(res => {
             const fetchOrders =[];
             for(let key in res.data){
                 fetchOrders.push({
                     ...res.data[key],
                     id: key
                    });
                }
            this.setState({ loading: false, orders: fetchOrders});
        })
        .catch(err =>{
            this.setState({loading: false});
        });
    }
    render(){
        return(
            <div>
                {this.state.orders.map(order =>(
                    <Order key={order.id} ingediants={order.ingediants} price={order.price} />
                    
                ))}
                
                
            </div>
        )
    }
}

export default ErrorHandler (Orders, axios);