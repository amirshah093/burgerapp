import React from 'react'
import styles from './modules.module.css'
import Aux from '../../../HOC/Auxelary';
import BackDrop from '../BackDrop/BackDrop';

class Modele extends React.Component{

    shouldComponentUpdate (nextProps, nextState){
        return nextProps.show !== this.props.show || nextProps !== this.props.children;
    }
    componentDidUpdate(){
        console.log('[Modele] Will Update')
    }
    render(){
        return(
            <Aux >
                <BackDrop show={this.props.show} clicked={this.props.moduleClosed} />
                <div className={styles.Modal}
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-10)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                    {this.props.children}
                </div>
        
            </Aux>
        )
    }
} 

export default Modele;
