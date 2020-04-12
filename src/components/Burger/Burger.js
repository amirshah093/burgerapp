import React from 'react'
import BurgerEng from './BurgerEng/BurgerEng'
import styles from './burger.module.css';
import {withRouter} from 'react-router-dom'

const Burger = (props) => {
    let ingediantsTrnsform = Object.keys(props.ingediants)
    .map(igKey => {
        return[...Array(props.ingediants[igKey])].map((_, i) =>{
        return <BurgerEng key={igKey + i} type = {igKey} />;
        });
    })
    .reduce((arr, el) =>{
        return arr.concat(el)
    },[]);
    if(ingediantsTrnsform.length === 0){
        ingediantsTrnsform = <h4>Please staart adding ingredinats</h4>
    }

    return (
        <div className={styles.Burger}>
            <BurgerEng type="bread-top" />
            {ingediantsTrnsform}
            <BurgerEng type="bread-bottom" />
        </div>
    )
}

export default withRouter(Burger);
