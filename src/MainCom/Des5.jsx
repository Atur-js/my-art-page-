import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class Des5 extends Component {
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
                    Tilt Function Battery-free Stylus - Comes with 8192 levels of pen pressure with ±60 pen tilt<br/>
                    support, allowing you to have advanced pen performance; Battery-free pen PW507, no longer<br/>
                    need to worry about charging.</li>
                <li style={{marginBottom:"20px"}}>
                    11.6 Inches IPS screen - 120% sRGB Color Gamut presents 16.7 million colors vividly, which can<br/>
                    greatly reduce the color difference; The dimension of the KAMVAS Pro 12 is 350 x 198.6 x 11mm,<br/>
                    which is close to an A4 Sheet; Ultra thin and portable, take it to anywhere you want.</li>
                <li style={{marginBottom:"20px"}}>
                    4 Press Keys and 1 Touch Bar - Setting the express keys in the light of your preference, you can <br/>
                    easily access your favorite settings and enhance your productivity; The 266 PPS report rate provides<br/>
                    a quick and agile feedback of the pen strokes, which is conducive to the smoothness of the lines.</li>
                <li style={{marginBottom:"20px"}}>
                    4 Press Keys and 1 Touch Bar - Setting the express keys in the light of your preference, you can<br/>
                    easily access your favorite settings and enhance your productivity; The 266 PPS report rate <br/>
                    provides a quick and agile feedback of the pen strokes, which is conducive to the smoothness <br/>
                    of the lines.</li>
            </ul></div>
            </div>  
        )
    }
}

export default Des5;