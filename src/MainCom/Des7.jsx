import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class Des7 extends Component {
    state = { showing: true };

    render() {
        const { showing } = this.state;
        return (
            <div>
                <Button onClick={() => this.setState({ showing: !showing })} style={{color:'white',
                border:'none',height:'40px', marginLeft:'200px', marginLeft:'45px'}}>DESCRIPTION</Button>


                <div style={{ display: (showing ? 'block' : 'none') }}>
                    <ul style={{color:'black',listStyle:'none',marginTop:"35px"}}>
                <li style={{marginBottom:"20px"}}>
                    [SCREEN RESOLUTION]--1920 x 1080；Color Gamut:  88%（NTSC）；Display Color: 16.7M(8bit)；Dimension:<br/>
                    442*274*12.5mm；Active Area:  344.16 × 193.59mm；Report Rate:  266 PPS；Tilt angle:±60°。[ Warranty ]<br/>
                    ：Within one year from the date of purchase</li>
                <li style={{marginBottom:"20px"}}>
                    [FULL-LAMINATED HD SCREEN]--Due to the Full Lamination Technology, there is no air layer inside the<br/>
                    screen of GAOMON PD156PRO drawing tablet, so there will be no deviation of the cursor visually. The<br/>
                    color gamut is 88% NTSC, and the number of colors is 16.7M. It is suitable for artists who have<br/>
                    long-term exposure to digital drawing and pursue professional display effect</li>
                <li style={{marginBottom:"20px"}}>
                    [9 EXPRESS SHORTCUT KEYS/1 ROUND BUTTON]--After installing the driver, the first 9 buttons on the<br/>
                    left side of the screen are customizable according to your preferences. The default setting of the<br/>
                    round button in the middle is to switch the function between zooming the canvas, adjusting the brush<br/>
                    size and scrolling the page by pressing the round button, and then scroll the ring to adjust the size<br/>
                    or move. If the PC is Win10, the round button and scroll ring can realize the Dial function</li>
                <li style={{marginBottom:"20px"}}>
                    [TILT SUPPORT PASSIVE PEN AP50]-- Pen Pressure: 8192 levels; Support Tilt Function;No need to charge.<br/>
                    Allows you to draw smooth, three-dimensional lines at any time. PEN HOLDER & PEN NIBS]-- 8 replacement<br/>
                    nibs are put inside the pen holder </li>
            </ul></div>
            </div>  
        )
    }
}

export default Des7;