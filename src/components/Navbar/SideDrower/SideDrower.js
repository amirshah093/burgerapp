import React from 'react';
import styles from './SideDrower.module.css';
import Logo from '../../Logo';
import NavItems from '../NavItems/NavItems';
import BackDrop from '../../UI/BackDrop/BackDrop'
import Aux from '../../UI/../../HOC/Auxelary';

const SideDrower = (props) => {

    let attachedClasses = [styles.SideDrower, styles.Close];
        if(props.open) {
            attachedClasses = [styles.SideDrower,  styles.Open] 
        }
    return (
        <Aux>
            <BackDrop show={props.open} clicked={props.closed}  />
            <div className={ attachedClasses.join(' ')}>
                <Logo height="10%" />
                <nav>
                    <NavItems />
                </nav>
            </div>
        </Aux>
    )
}

export default SideDrower
