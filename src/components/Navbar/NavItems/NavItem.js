import React from 'react';
import styles from './navItem.module.css'
import {NavLink} from 'react-router-dom';

const NavItem = (props) => (
        
         <li className={styles.NavItem}>
             <NavLink to={props.link} exact={props.exact} 
             activeClassName={styles.active}>{props.children}</NavLink>
         </li>
            
       
    )


export default NavItem
