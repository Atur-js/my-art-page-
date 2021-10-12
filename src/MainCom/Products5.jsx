import React from 'react';
import { Button, Container} from 'react-bootstrap';
import Des5 from './Des5';
import image from "./../image/12.jpg";

const Products5 = () => {


    return (
        
        
                <React.Fragment>
                    <div className="main" style={{backgroundColor:"#ffffff",height:'auto',width:'100%'}}>
                        <Container>
                                <div style={{alignItems:'initial'}}>
                            <img src={image} style={{height:'250px',width:'300px', marginTop:'100px'}}/>
                                </div>
                            <div className="text" style={{color:"black",marginTop:'50px'}} >
                            <p style={{color:'black',fontFamily:'serif',fontSize:'25px',fontWeight:"bolder"}}>Huion KAMVAS Pro 12 Drawing Tablet</p>
                            <p style={{color:'black',fontSize:'20px'}}>$349</p>
                            
                            <p style={{color:'black',fontFamily:'serif',fontSize:'17px'}}>Huion KAMVAS Pro 12 Drawing Tablet with Screen
                            Graphics Drawing<br/> Monitor Full-Laminated Pen Display with Battery-Free Pen and<br/>
                            Adjustable Stand 8192 Pen Pressure(GT-116)</p>
                            
                            <p style={{color:'black'}}>
                            color:    
                            <Button className='primary' style={{height:'20px',width:'10px',margin:'5px',border:'none'}}></Button>
                            <Button style={{height:'20px',width:'10px',margin:'5px',backgroundColor:'lightGreen',border:'none'}}></Button>
                            <Button style={{height:'20px',width:'10px',margin:'5px',backgroundColor:'black',border:'none'}}></Button>
                            <Button style={{height:'20px',width:'10px',backgroundColor:'purple',border:'none'}}></Button>
                            </p>
                            
                            <div>
                                <Des5/>
                            </div>
                            <div style={{height:"50px"}}></div>
                            </div>
                        </Container>
                    </div>
                </React.Fragment>
    );
}

export default Products5;