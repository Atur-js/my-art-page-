import React from 'react';
import { Button, Container} from 'react-bootstrap';
import Des6 from './Des6';
import image from "./../image/13.jpg";

const Products6 = () => {


    return (
        
        
                <React.Fragment>
                    <div className="main" style={{backgroundColor:"#ffffff",height:'auto',width:'100%'}}>
                        <Container>
                                <div style={{alignItems:'initial'}}>
                            <img src={image} style={{height:'250px',width:'300px', marginTop:'100px'}}/>
                                </div>
                            <div className="text" style={{color:"black",marginTop:'50px'}} >
                            <p style={{color:'black',fontFamily:'serif',fontSize:'25px',fontWeight:"bolder"}}>Tiktecklab A4 Size Ultra-Thin Portable Tracer</p>
                            <p style={{color:'black',fontSize:'20px'}}>$18.08</p>

                            <p style={{color:'black',fontFamily:'serif',fontSize:'17px'}}>
                                tiktecklab A4 Size Ultra-Thin Portable Tracer White LED Artcraft Tracing Pad<br/>
                                Light Box w dimmable Brightness for 5D DIY Diamond Painting Artists Drawing<br/>
                                Sketching Animation, Black
                            </p>
                            
                            <p style={{color:'black'}}>
                            color:    
                            <Button className='primary' style={{height:'20px',width:'10px',margin:'5px',border:'none'}}></Button>
                            <Button style={{height:'20px',width:'10px',margin:'5px',backgroundColor:'lightGreen',border:'none'}}></Button>
                            <Button style={{height:'20px',width:'10px',margin:'5px',backgroundColor:'black',border:'none'}}></Button>
                            <Button style={{height:'20px',width:'10px',backgroundColor:'purple',border:'none'}}></Button>
                            </p>
                            
                            <div>
                                <Des6/>
                            </div>
                            <div style={{height:"50px"}}></div>
                            </div>
                        </Container>
                    </div>
                </React.Fragment>
    );
}

export default Products6;