import React from 'react';
import Aux from '../HOC/Auxelary';
import styles from './layout.module.css';
import Toolbar from './Navbar/Toolbar/Toolbar';
import SideDrower from './Navbar/SideDrower/SideDrower';


const Layout = (props) =>(
    <Aux>
        <Toolbar />
        <SideDrower />
        <main className={styles.Content}>

        {props.children}
        </main>
    </Aux>
    
);

export default Layout;

