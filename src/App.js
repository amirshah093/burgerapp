import React from 'react';
import Layout from './components/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import {Route} from 'react-router-dom';
import Orders from './containers/Orders/Orders';

function App() {
  return (
    <div>
      <Layout>
        <Route exact path='/' component={BurgerBuilder} />
        <Route  path='/orders' component={Orders} />
        <Route  path='/checkout' component={Checkout} />
      </Layout>
      
    </div>
  );
}

export default App;


