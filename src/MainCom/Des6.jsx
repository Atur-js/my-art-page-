import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class Des6 extends Component {
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
                    Portable and Slim- The thickness is only 5mm(less than 0.3 inch) which makes it easy to carry.<br/>
                    Dimension: 14.1 inch x 9.4 inch. The illumination is perfectly even, super bright, and flicker-free
                    </li>
                <li style={{marginBottom:"20px"}}>
                    USB Powered: Comes with a USB cable, easily power the light box from any Computer, Power Bank<br/>
                    or USB Plug that connects directly into a wall outlet.Working Voltage: DC 5V,Rate Power: 3.2W.
                    </li>
                <li style={{marginBottom:"20px"}}>
                    The brightness is adjustable,so you can set it to to your preference. Flicker-Free super bright
                    long<br/> last Led light.Touch sensor Switch Design , turn on/off and brightness control easily just by touch.
                    </li>
                <li style={{marginBottom:"20px"}}>
                    Ideal for Stenciling, 2D Animation, Calligraphy, Embossing, Scrap-booking, Sketching & Drawing,<br/>
                    Sewing projects, Stained Glass, Quilting, Appliqué etc
                    </li>
            </ul></div>
            </div>  
        )
    }
}

export default Des6;