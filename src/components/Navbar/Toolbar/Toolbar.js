import React from 'react';
import styles from './toolbar.module.css';
import Logo from '../../Logo';
import NavItems from '../NavItems/NavItems';
import DrowerToggle from '../SideDrower/DrowerToggle';

const Toolbar = (props) => {
    return (
        <header className={styles.Toolbar}>
            <DrowerToggle clicked={props.DrowerToggleClicked} />
            <Logo  />
            <nav className={styles.DesktopOnly}>
               <NavItems />
            </nav>
        </header>
    )
}

export default Toolbar;
