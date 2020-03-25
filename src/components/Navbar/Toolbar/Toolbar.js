import React from 'react';
import styles from './toolbar.module.css';
import Logo from '../../Logo';
import NavItems from '../NavItems/NavItems';

const Toolbar = (props) => {
    return (
        <header className={styles.Toolbar}>
            <div>MENU</div>
            <Logo  />
            <nav className={styles.DesktopOnly}>
               <NavItems />
            </nav>
        </header>
    )
}

export default Toolbar;
