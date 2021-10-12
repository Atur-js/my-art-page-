import React from 'react';
import Header from './shared/header';
import Footer from './shared/footer';


const Layout = ({children}) => {
    return ( 
        <>
        <Header/>
        <main className="container">
            {children}
        </main>
        <Footer/>
        </>
     );
}
 
export default Layout;