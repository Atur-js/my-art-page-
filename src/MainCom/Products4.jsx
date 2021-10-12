import React from 'react';
import { Button, Container} from 'react-bootstrap';
import Des4 from './Des4';
import image from "./../image/11.webp";

const Products4 = () => {


    return (
        
        
                <React.Fragment>
                    <div className="main" style={{backgroundColor:"#ffffff",height:'auto',width:'100%'}}>
                        <Container>
                                <div style={{alignItems:'initial'}}>
                            <img src={image} style={{height:'250px',width:'300px', marginTop:'100px'}}/>
                                </div>
                            <div className="text" style={{color:"black",marginTop:'50px'}} >
                            <p style={{color:'black',fontFamily:'serif',fontSize:'25px',fontWeight:"bolder"}}>Graphics Drawing Tablet, UGEE M708</p>
                            <p style={{color:'black',fontSize:'20px'}}>$77</p>

                            <p style={{color:'black',fontFamily:'serif',fontSize:'17px'}}>
                                Graphics Drawing Tablet, UGEE M708 10 x 6 inch Large Drawing Tablet with 8 Hot <br/>
                                Keys, Passive Stylus of 8192 Levels Pressure, UGEE M708 Graphics Tablet for Paint,<br/>
                                Design, Art Creation Sketch
                            </p>    
                            <p style={{color:'black'}}>
                            color:    
                            <Button className='primary' style={{height:'20px',width:'10px',margin:'5px',border:'none'}}></Button>
                            <Button style={{height:'20px',width:'10px',margin:'5px',backgroundColor:'lightGreen',border:'none'}}></Button>
                            <Button style={{height:'20px',width:'10px',margin:'5px',backgroundColor:'black',border:'none'}}></Button>
                            <Button style={{height:'20px',width:'10px',backgroundColor:'purple',border:'none'}}></Button>
                            </p>
                            
                            <div>
                                <Des4/>
                            </div>
                            <div style={{height:"50px"}}></div>
                            </div>
                        </Container>
                    </div>
                </React.Fragment>
    );
}

export default Products4;