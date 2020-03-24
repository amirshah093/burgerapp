import React from 'react';
import Aux from '../HOC/Auxelary';
import styles from './layout.module.css';


const Layout = (props) =>(
    <Aux>
        <main className={styles.Content}>
        <div >tool, side bar, bakdrop</div>
            {props.children}
        </main>
    </Aux>
    
);

export default Layout;

