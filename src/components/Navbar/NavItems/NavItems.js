import React from 'react';
import styles from './navItems.module.css'
import NavItem from './NavItem';

const NavItems = () => {
    return (
        <ul className={styles.NavItems}>
            <NavItem link='/' active>
                Burger builder
            </NavItem>
            <NavItem link='/' >
                checkout
            </NavItem>
         
        </ul>
    )
}

export default NavItems;
