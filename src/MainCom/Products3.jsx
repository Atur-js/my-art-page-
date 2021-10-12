import React from 'react';
import { Button, Container} from 'react-bootstrap';
import Des3 from './Des3';
import image from "./../image/10.jpg";

const Products3 = () => {


    return (
        
        
                <React.Fragment>
                    <div className="main" style={{backgroundColor:"#ffffff",height:'auto',width:'100%'}}>
                        <Container>
                                <div style={{alignItems:'initial'}}>
                            <img src={image} style={{height:'250px',width:'300px', marginTop:'100px'}}/>
                                </div>
                            <div className="text" style={{color:"black",marginTop:'50px'}} >
                            <p style={{color:'black',fontFamily:'serif',fontSize:'25px',fontWeight:"bolder"}}>HUION KAMVAS 13 Graphics Drawing Tablet</p>
                            <p style={{color:'black',fontSize:'20px'}}>$211</p>
                            
                            <p style={{color:'black',fontFamily:'serif',fontSize:'17px'}}>2020 HUION Kamvas 13 Graphics Drawing Tablet with Screen Pen<br/>
                            Display Full Laminated Screen Battery Free Stylus 8192 Pressure Sensitivity<br/>
                            Tilt 8 Express Keys with Adjustable stand-13.3inch, Green</p>
                            
                            <p style={{color:'black'}}>
                            color:    
                            <Button className='primary' style={{height:'20px',width:'10px',margin:'5px',border:'none'}}></Button>
                            <Button style={{height:'20px',width:'10px',margin:'5px',backgroundColor:'lightGreen',border:'none'}}></Button>
                            <Button style={{height:'20px',width:'10px',margin:'5px',backgroundColor:'black',border:'none'}}></Button>
                            <Button style={{height:'20px',width:'10px',backgroundColor:'purple',border:'none'}}></Button>
                            </p>
                            
                            <div>
                                <Des3/>
                            </div>
                            <div style={{height:"50px"}}></div>
                            </div>
                        </Container>
                    </div>
                </React.Fragment>
    );
}

export default Products3;