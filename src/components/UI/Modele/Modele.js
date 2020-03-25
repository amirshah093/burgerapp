import React from 'react'
import styles from './modules.module.css'
import Aux from '../../../HOC/Auxelary';
import BackDrop from '../BackDrop/BackDrop';

const Modele = (props) => (
    <Aux>
        <BackDrop show={props.show} clicked={props.moduleClosed} />
        <div className={styles.Modal}
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-10)',
            opacity: props.show ? '1' : '0'
        }}>
            {props.children}
        </div>

    </Aux>
)

export default Modele;
