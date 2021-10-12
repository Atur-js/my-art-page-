import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Store from '../pages/store';
import Cart from "../pages/cart/Cart";

const Layout = () => {
  return (
    <Router>
        <Switch>
          <div style={{marginTop:"200px"}}>
          <Route path="/" component={Store}/>
          <Route path="/cart" component={Cart} />
          </div>
        </Switch>
    </Router>
  );
}

export default Layout;