import React from 'react';
import Carousels from './Carousels';
import "./Hero.css";
import MainLayout from "./MainLayout";


const Hero = () => {
    return ( 
        <React.Fragment className="newBody">
                <div class="glass-panel" >
                    <h1><a href="#" target="_blank" style={{color:"black", fontSize:"65px", fontWeight:"bolder",fontFamily:"Monotype Corsiva"}} >Digital Art</a></h1>
                    <p>You can learn digital Art with our products!
                        <br/>All you need for digital art is here.
                    </p>
                <div class="glass-toolbar">
                    {/* <button class="glass-button"><a href="./Carousels">Get start<a/> </button> */}
                    <a href="./Carousels" class="glass-button">Get Start</a>
                    <a href="./mainLayout" target="_blank" class="glass-button" >Our products</a>
                </div>
                </div>
        </React.Fragment>
    );
}

export default Hero;