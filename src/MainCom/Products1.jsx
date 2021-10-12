import React from 'react';
import { Button, Container} from 'react-bootstrap';
import Des from './Des';
import image from "./../image/16.jpg";
import "./Products1.css"

const Products1 = () => {


    return (
        
        
                <React.Fragment>
                    <div className="main" style={{backgroundColor:"#ffffff",height:'auto',width:'100%'}}>
                        <Container>
                                <div style={{alignItems:'initial'}}>
                            <img src={image} style={{height:'300px',width:'300px', marginTop:'100px'}}/>
                                </div>
                            <div className="text" style={{color:"black",marginTop:'50px'}} >
                            <p style={{color:'black',fontFamily:'serif',fontSize:'25px',fontWeight:"bolder"}}>LCD Writing Tablet ERUW 10 Inch</p>
                            <p key={1} style={{color:'black',fontSize:'20px'}}>$16.9</p>
                            
                            <p style={{color:'black',fontFamily:'serif',fontSize:'17px'}}>LCD Writing Tablet ERUW 10 Inch Electronic Graphics Drawing<br/>
                            Pads, Drawing Board eWriter,Digital Handwriting Doodle Pad for <br/>
                            Kids Home School Office Girl Boy Toys Christmas Birthday Gift Age 3+</p>
                            
                            <p style={{color:'black'}}>
                            color:    
                            <Button className='primary' style={{height:'20px',width:'10px',margin:'5px',border:'none'}}></Button>
                            <Button style={{height:'20px',width:'10px',margin:'5px',backgroundColor:'lightGreen',border:'none'}}></Button>
                            <Button style={{height:'20px',width:'10px',margin:'5px',backgroundColor:'black',border:'none'}}></Button>
                            <Button style={{height:'20px',width:'10px',backgroundColor:'purple',border:'none'}}></Button>
                            </p>
                            
                            <div>
                                <Des/>
                            </div>
                            <div style={{height:"50px"}}></div>
                            </div>
                        </Container>
                    </div>
                </React.Fragment>
    );
}

export default Products1;