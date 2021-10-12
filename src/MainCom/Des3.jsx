import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class Des3 extends Component {
    state = { showing: true };

    render() {
        const { showing } = this.state;
        return (
            <div>
                <Button onClick={() => this.setState({ showing: !showing })} style={{color:'white',
                border:'none',height:'40px', marginLeft:'200px', marginLeft:'45px'}}>DESCRIPTION</Button>


                <div style={{ display: (showing ? 'block' : 'none') }}>
                    <ul style={{color:'black',listStyle:'none',marginTop:"30px"}}>
                <li style={{marginBottom:"20px"}}>
                    Full-Laminated Screen -Without parallax or any air gap inside under the drawing tablets<br/>
                    screen. Which means you will get a pretty clearly and beautiful view even when it’s<br/> under
                    the super bright area, perform better. The top layer is laminated with the screen <br/>
                    followed, make it seamless. Reduced thickness improves visual quality, no dust<br/>
                    inside, pictures on screen looks alike painted on outdoors. With 1920 x 1080 <br/>
                    FHD display 16.7 million colors, 120%sRGB gamut 178°viewing angle.
                </li>
                <li style={{marginBottom:"20px"}}>
                    Without Offset - Upgraded PW 517 Pen Tech 3.0 Newest Version, feel like paper writing with<br/>
                    accuracy. PW517 is upgraded from PW507, provides more accuracy just like you're using a real <br/>
                    pen. No need to worry the pen charging, battery-free EMR technology makes it more comfortable<br/>
                    to use. Comes with 266PPS report rate, 8192 pressure sensitivity, ±60 Levels Tilt Recognition,<br/>
                    offers a better natural experience almost without offset.
                </li>
                <li style={{marginBottom:"20px"}}>
                    13.3 inch Large but Light-Weight - Compared with Kamvas pro 13,shrinks in size but keeps the<br/>
                    large screen and working area but more light-weight, easy to carry, portable and is the best<br/>
                    computer graphics tablets can be carried everywhere. Kamvas 13 has a much more competitive<br/>
                    price and more available colors than Kamvas pro 13, green or black. Thickness of 11.8mm<br/>
                    and weight of 980g.</li>
                <li style={{marginBottom:"20px"}}>
                    Only 1 USB-C to USB-C Cable is Needed Connect If You Don't Want a 3-in 1 USB-C Cable. Decreasing<br/>
                    the mess of cables, directly connect to Android phone that has USB-C port, use a adapter to<br/>
                    connect to your phone if it is without USB-C port. Offers 2 ways to connect as your like,<br/>
                    choose the most efficient way and regular the cable to avoid cable entangled and help to<br/>
                    keep your cable desk organized. 3-in-1 USB-C cable is included in the package, USB-C to<br/>
                    USB-C cable not included (Order Separately).</li>
            </ul></div>
            <div style={{marginTop:"50px"}}></div>
            </div>  
        )
    }
}

export default Des3;