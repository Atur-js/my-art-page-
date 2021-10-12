import React from 'react';
import { Button, Container} from 'react-bootstrap';
import Des7 from './Des7';
import image from "./../image/17.jpg";

const Products7 = () => {


    return (
        
        
                <React.Fragment>
                    <div className="main" style={{backgroundColor:"#ffffff",height:'auto',width:'100%'}}>
                        <Container>
                                <div style={{alignItems:'initial'}}>
                            <img src={image} style={{height:'250px',width:'300px', marginTop:'100px'}}/>
                                </div>
                            <div className="text" style={{color:"black",marginTop:'50px'}} >
                            <p style={{color:'black',fontFamily:'serif',fontSize:'25px',fontWeight:"bolder"}}>GAOMON PD156PRO Digital Graphics Tablet</p>
                            <p style={{color:'black',fontSize:'20px'}}>$305.15</p>
                            
                            <p style={{color:'black',fontFamily:'serif',fontSize:'17px'}}>GAOMON PD156PRO Digital Graphics Drawing Tablet 15.6
                            inches Full-Laminated<br/> Screen Pen Display with Tilt Battery-Free Stylus and 9 Shortcut Keys</p>
                            
                            <p style={{color:'black'}}>
                            color:    
                            <Button className='primary' style={{height:'20px',width:'10px',margin:'5px',border:'none'}}></Button>
                            <Button style={{height:'20px',width:'10px',margin:'5px',backgroundColor:'lightGreen',border:'none'}}></Button>
                            <Button style={{height:'20px',width:'10px',margin:'5px',backgroundColor:'black',border:'none'}}></Button>
                            <Button style={{height:'20px',width:'10px',backgroundColor:'purple',border:'none'}}></Button>
                            </p>
                            
                            <div>
                                <Des7/>
                            </div>
                            <div style={{height:"50px"}}></div>
                            </div>
                        </Container>
                    </div>
                </React.Fragment>
    );
}

export default Products7;