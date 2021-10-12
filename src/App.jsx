import React from 'react';
import Head from "./Nav/Head";
import Carousels from './Carousels';
import Carousels2 from './Carousels2';
import Products1 from './MainCom/Products1';
import Products2 from './MainCom/Products2';
import Products3 from './MainCom/Products3';
import Products4 from './MainCom/Products4';
import Products5 from './MainCom/Products5';
import Products6 from './MainCom/Products6';
import Products7 from './MainCom/Products7';
import Products8 from './MainCom/Products8';
import Store from './pages/store';
import Cart from './pages/cart/Cart';
import NotFound from './pages/NotFound';
import Hero from "./Hero";
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Layout from './routes';
import About from './pages/About';
import MainLayout from './MainLayout';

const App = () => {
    return ( <React.Fragment >
            <BrowserRouter>
            <Router>
                <Head/>
                <Switch>
                    <Route path='/' exact component={Hero}/>
                    <Route path='/carousels' component={Carousels}/>
                    <Route path='/carousels2' component={Carousels2}/>
                    <Route path='/products1'  component={Products1}/>
                    <Route path='/products2'  component={Products2}/>
                    <Route path='/products3'  component={Products3}/>
                    <Route path='/products4'  component={Products4}/>
                    <Route path='/products5'  component={Products5}/>
                    <Route path='/products6'  component={Products6}/>
                    <Route path='/products7'  component={Products7}/>
                    <Route path='/products8'  component={Products8}/>
                    <Route path="/about" component={About} />
                    <Route path="/store" component={Store}/>
                    <Route path="/cart" component={Cart} />
                    <Route path="/notFound" component={NotFound} />
                    <Route path='/layout'  component={Layout}/>
                    <Route path='/mainLayout'  component={MainLayout}/>
                    </Switch>
            </Router>
            </BrowserRouter>
            </React.Fragment>);
}

export default App;