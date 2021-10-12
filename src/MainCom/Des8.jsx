import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class Des8 extends Component {
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
                    See your imagination come to life in full color on a 13.3” display with a natural surface <br/>
                    friction that makes for intuitive drawing on screen. It feels like<br/>
                    you’re drawing or writing on paper.</li>
                <li style={{marginBottom:"20px"}}>
                    Feels like a real pen – no need for batteries, the pen feels and looks right. Plus, this one<br/>
                    pen uses software to act as multiple pens and brushes in a full range<br/>
                    of colors, with superb accuracy.</li>
                <li style={{marginBottom:"20px"}}>
                    Digital freedom – sketch or paint directly on screen, draw diagrams, annotate documents,<br/>
                    enhance photos and videos, plus you can delete, edit and share your creations with ease.</li>
                <li style={{marginBottom:"20px"}}>
                    Includes Creative Software: purchase & register your Wacom One and receive Bamboo <br/>Paper Pro,
                    Clip Studio Paint Pro (3-month license), Adobe Photoshop & Lightroom<br/> (2-month license),
                    Adobe Fresco (6-month license)<br/> and Magma Studio (3-month Pro license)</li>
            </ul></div>
            </div>  
        )
    }
}

export default Des8;