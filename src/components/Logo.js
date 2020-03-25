import React from 'react';
import styles from './logo.module.css'
import Logoo from '../assets/original.png';

const Logo = (props) => {
    return (
        <div className={styles.Logo} style={{height: props.height}}>
            <img  src={Logoo} alt="Logo"/>
        </div>
    )
}

export default Logo;
