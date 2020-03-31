import React from 'react';
import Aux from '../Auxelary';
import Modele from '../../components/UI/Modele/Modele';

const ErrorHandler = (WrapedComponent, axios) => {
    return class extends React.Component{
        state ={
            error: null,
        }
        componentDidMount(){
            axios.interceptors.request.use(req =>{
                this.setState({error: null});
                return req;
            })
            axios.interceptors.response.use(res => res, error =>{
                this.setState({error: error})
            })
        }

        errorConfirmedHandler =() =>{
            this.setState({error: null})
        }
        render(){
            
            return(
                <Aux>
                    <Modele show={this.state.error}
                    moduleClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modele>
                    <WrapedComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default ErrorHandler;
