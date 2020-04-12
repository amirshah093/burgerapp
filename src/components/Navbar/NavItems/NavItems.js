import React from 'react';
import styles from './navItems.module.css'
import NavItem from './NavItem';

const NavItems = () =>  (
        <ul className={styles.NavItems}>
            <NavItem link='/' exact >Burger builder</NavItem>
            <NavItem link='/orders' >Orders</NavItem>
        </ul>
    )


export default NavItems;
