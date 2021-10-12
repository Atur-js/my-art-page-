import React from 'react';
import Cart from './pages/cart/Cart';
import Store from './pages/store';
// import Layout from './routes';

const MainLayout = () => {
    return ( 
        <React.Fragment>
            
            <div style={{marginTop:"80px",backgroundColor:"white"}}>
            <Store/>
            </div>
                
        </React.Fragment>
    );    
}

export default MainLayout;