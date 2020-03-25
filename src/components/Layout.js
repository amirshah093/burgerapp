import React from 'react';
import Aux from '../HOC/Auxelary';
import styles from './layout.module.css';
import Toolbar from './Navbar/Toolbar/Toolbar';


const Layout = (props) =>(
    <Aux>
        <main className={styles.Content}>
        <Toolbar />
                    {props.children}
        </main>
    </Aux>
    
);

export default Layout;

