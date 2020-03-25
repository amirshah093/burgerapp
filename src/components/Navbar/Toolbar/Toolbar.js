import React from 'react';
import styles from './toolbar.module.css';

const Toolbar = (props) => {
    return (
        <header className={styles.Toolbar}>
            <div>MENU</div>
            <div>Logo</div>
            <nav>
                <ul>
                    <li>...</li>
                </ul>
            </nav>
        </header>
    )
}

export default Toolbar;
