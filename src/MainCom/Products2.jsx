import React from 'react';
import { Button, Container} from 'react-bootstrap';
import image from "./../image/9.jpg";
import Des2 from './Des2';

const Products2 = () => {


    return (
        
        
                <React.Fragment>
                    <div className="main" style={{backgroundColor:"#ffffff",height:'auto',width:'100%'}}>
                        <Container>
                                <div style={{alignItems:'initial'}}>
                            <img src={image} style={{height:'250px',width:'300px', marginTop:'100px'}}/>
                                </div>
                            <div className="text" style={{color:"black",marginTop:'50px'}} >
                            <p style={{color:'black',fontFamily:'serif',fontSize:'25px',fontWeight:"bolder"}}>GAOMON PD2200 Drawing Tablet</p>
                            <p style={{color:'black',fontSize:'20px'}}>$439</p>
                            
                            <p style={{color:'black',fontFamily:'serif',fontSize:'17px'}}>
                                GAOMON PD2200 92%NTSC Full-Laminated Pen Display with 8192 Battery-Free <br/>
                                Tilt-Support Stylus 8 Touch Buttons -21.5'' Drawing Tablet<br/>
                                Monitor with Adjustable Stand
                            </p>   
                            <p style={{color:'black'}}>
                            color:    
                            <Button className='primary' style={{height:'20px',width:'10px',margin:'5px',border:'none'}}></Button>
                            <Button style={{height:'20px',width:'10px',margin:'5px',backgroundColor:'lightGreen',border:'none'}}></Button>
                            <Button style={{height:'20px',width:'10px',margin:'5px',backgroundColor:'black',border:'none'}}></Button>
                            <Button style={{height:'20px',width:'10px',backgroundColor:'purple',border:'none'}}></Button>
                            </p>
                            
                            <div>
                                <Des2/>
                            </div>
                            <div style={{height:"50px"}}></div>
                            </div>
                        </Container>
                    </div>
                </React.Fragment>
    );
}

export default Products2;