import React from 'react';
import styles from './SideDrower.module.css';
import Logo from '../../Logo';
import NavItems from '../NavItems/NavItems';

const SideDrower = () => {
    return (
        <div className={styles.SideDrower}>
            <Logo height="10%" />
            <nav>
                <NavItems />
            </nav>
        </div>
    )
}

export default SideDrower
