import React from 'react';
import Button from '../../../components/UI/Buttons/Button';
import styles from './contactData.module.css';
import axios from '../../../Axios';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Forms/Input';


class ContactData extends React.Component{
    
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: ''
            }
        },
        loading: false
    }

    orderHandler = (e) =>{
        e.preventDefault();
         this.setState({loading: true});
         const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const order = {
            ingediants: this.props.ingediants,
            price: this.props.price,
            orderData: formData
        }

        axios.post('/orders.json', order)
        .then(res =>{
            this.setState({loading: false});
            this.props.history.push('/');
        })
        .catch(error => {
            this.setState({loading: false});
            }
        );
    };

    inputChangedHandler = (event, inputIdentifier) => {
        
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        this.setState({orderForm: updatedOrderForm});
    }

    render(){
        const formElementsArray = [];
            for( let key in this.state.orderForm){
                formElementsArray.push({
                    id: key,
                    config: this.state.orderForm[key]
                })
            }
        
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElemnt =>(
                    <Input 
                    key={formElemnt.id}
                    elementType = {formElemnt.config.elementType} 
                    elementConfig = {formElemnt.config.elementConfig} 
                    value = {formElemnt.config.value}
                    changed={(e) =>this.inputChangedHandler(e, formElemnt.id)} 
                    
                    />
                ))}
                <Button cliked={this.orderHandler} btnType="Success">ORDER</Button>
            </form>

        );
        if (this.state.loading){
            form = <Spinner />;
        }
        return(
            <div className={styles.ContactData}>
             <h1>My Contact Data</h1>
                {form}
            </div>
        )
    }
}

export default ContactData;