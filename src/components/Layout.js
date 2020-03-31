import React from 'react';
import Aux from '../HOC/Auxelary';
import styles from './layout.module.css';
import Toolbar from './Navbar/Toolbar/Toolbar';
import SideDrower from './Navbar/SideDrower/SideDrower';



class Layout extends React.Component{
    state ={
        showSideDeower: false,
    }

    sideDrowerClosedHandler =() =>{
        this.setState({showSideDeower: false})
    }

    sideToggleHandler =()=>{
        this.setState((prevState) =>{
            return {showSideDeower: ! prevState.showSideDeower};
        });
    }

    render(){
        return(
            <Aux>
                <Toolbar DrowerToggleClicked={this.sideToggleHandler} />
                <SideDrower 
                open={this.state.showSideDeower} 
                closed={this.sideDrowerClosedHandler} />
                <main className={styles.Content}>
                {this.props.children}
                </main>
            </Aux>
        )
    }
};

    


export default Layout;

