import React from 'react';
import { Button, Container} from 'react-bootstrap';
import Des8 from './Des8';
import image from "./../image/15.jpg";

const Products8 = () => {


    return (
        
        
                <React.Fragment>
                    <div className="main" style={{backgroundColor:"#ffffff",height:'auto',width:'100%'}}>
                        <Container>
                                <div style={{alignItems:'initial'}}>
                            <img src={image} style={{height:'250px',width:'300px', marginTop:'100px'}}/>
                                </div>
                            <div className="text" style={{color:"black",marginTop:'50px'}} >
                            <p style={{color:'black',fontFamily:'serif',fontSize:'25px',fontWeight:"bolder"}}>Wacom One Drawing Tablet 13.3 inch</p>
                            <p style={{color:'black',fontSize:'20px'}}>$399</p>

                            <p style={{color:'black',fontFamily:'serif',fontSize:'17px'}}>Wacom One Drawing Tablet with Screen, 13.3 inch Pen<br/> Display for Beginners and
                            Digital Mark-up: Mac, PC,<br/> Chromebook & Android (DTC133W0A)</p>
                            
                            <p style={{color:'black'}}>
                            color:    
                            <Button className='primary' style={{height:'20px',width:'10px',margin:'5px',border:'none'}}></Button>
                            <Button style={{height:'20px',width:'10px',margin:'5px',backgroundColor:'lightGreen',border:'none'}}></Button>
                            <Button style={{height:'20px',width:'10px',margin:'5px',backgroundColor:'black',border:'none'}}></Button>
                            <Button style={{height:'20px',width:'10px',backgroundColor:'purple',border:'none'}}></Button>
                            </p>
                            
                            <div>
                                <Des8/>
                            </div>
                            <div style={{height:"50px"}}></div>
                            </div>
                        </Container>
                    </div>
                </React.Fragment>
    );
}

export default Products8;