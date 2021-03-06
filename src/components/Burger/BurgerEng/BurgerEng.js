import React from 'react';
import styles from './butgerEng.module.css';
import PropTypes from 'prop-types';


class BurgerEng extends React.Component {

    render() {
        let ingrediant =null;
        
        switch(this.props.type) {
            case('bread-bottom'):
            ingrediant = <div className={styles.BreadBottom}></div>;
            break;

            case('bread-top'):
            ingrediant = (
                <div className={styles.BreadTop}>
                    <div className={styles.Seeds1}></div>
                    <div className={styles.Seeds2}></div>
                </div>);
            break;
            case('meat'):
                ingrediant = <div className={styles.Meat}></div>;
            break;
            case('cheese'):
                ingrediant = <div className={styles.Cheese}></div>;
            break;
            case('bacon'):
                ingrediant = <div className={styles.Bacon}></div>;
            break;
            case('salad'):
                ingrediant = <div className={styles.Salad}></div>;
            break;
            
            default: ingrediant = null;
            }
        return ingrediant;
    }
}
        BurgerEng.propTypes ={
            type: PropTypes.string.isRequired
        };


export default BurgerEng;