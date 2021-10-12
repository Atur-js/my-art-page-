import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class Des4 extends Component {
    state = { showing: true };

    render() {
        const { showing } = this.state;
        return (
            <div>
                <Button onClick={() => this.setState({ showing: !showing })} style={{color:'white',
                border:'none',height:'40px', marginLeft:'200px', marginLeft:'45px', marginLeft:'45px'}}>DESCRIPTION</Button>


                <div style={{ display: (showing ? 'block' : 'none') }}>
                    <ul style={{color:'black',listStyle:'none',marginTop:"35px"}}>
                <li style={{marginBottom:"20px"}}>
                    【Large Active Drawing Space】: UGEE M708 V2 graphic drawing tablet, features 10 x 6 inch <br/>
                    large active drawing space with papery texture surface, provides enormous and smooth drawing<br/>
                    for your digital artwork creation, offers no-lag sketch, painting experience;
                </li>
                <li style={{marginBottom:"20px"}}>
                    【8192 Passive Stylus Technology】: A more affordable passive stylus technology offers 8192<br/>
                    levels of pressure sensitivity allows you to draw accurate lines of any weight and opacity<br/>
                    according to the pressure you apply to the pen, sharper line with light pressure and thick<br/>
                    line with hard pressure, perfect for artistry design or unique brush effect for photo retouching;
                </li>
                <li style={{marginBottom:"20px"}}>
                    【Compatible with Multiple System&Softwares】: Powerful compatibility, tablet for drawing <br/>
                    computer, perform well with Windows 10 / 8 / 7 and Mac OS X 10.10 or above; Driver program<br/>
                    works with creative software such as Photoshop, Illustrator, Macromedia Flash, Comic Studio,<br/>
                    SAI, Infinite Stratos, 3D MAX, Autodesk MAYA, Pixologic ZBrush and more;
                </li>
                <li style={{marginBottom:"20px"}}>
                    【Ergonomically Designed Shortcuts】: 8 customizable express keys on the side for short cuts <br/>
                    like eraser, zoom in and out, scrolling and undo, provide a lot more for convenience and helps<br/>
                    to improve the productivity and efficiency when creating with the drawing tablet.
                </li>
            </ul></div>
            </div>  
        )
    }
}

export default Des4;