import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class Des2 extends Component {
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
                    【FOR ONLINE TEACHING & MEETING】You can use GAOMON PD2200 pen display tablet for online education<br/>
                    and remote meeting. It works with most online meeting programs, like Zoom, and so on. 【FOR DIGITAL<br/>
                    ART & CREATION】-- It's not only for beginner but also for professionalists in digital drawing, <br/>
                    sketching, graphics design, 3D art work, animation, etc. 【FOR ANNOTATING AND SIGNATURE】--It<br/>
                    is also broadly used in annotating and signing file in excel, word, pdf, ppt, etc.</li>
                <li style={{marginBottom:"20px"}}>
                    【HD FULL-LAMINATED SCREEN & 92% NTSC】--Visually the parallax will be deduced to the lowest level.<br/>
                    【WITH AG-FILME PRE-APPLIED】--To protect the PD2200 drawing monitor during long shipping and to <br/>
                    avoid bubble when applying film, we applied an anti-glare film in advance in our no dust factory.<br/>
                    After you peel off the outside layer protective film, the real film remains on PD2200.</li>
                <li style={{marginBottom:"20px"}}>
                    【8192 LEVELS PRESSURE & BATTERY-FREE PEN】【TILT SUPPORT FUNCTION】--GAOMON PD2200 <br/>Drawing Display
                    Tablet uses 8192 battery-free pen with tilt support function allow you to create your remarkable<br/> piece
                    with superior control and stunning fluidity. [PEN HOLDER & PEN NIBS]-- 8 replacement nibs are put <br/>
                    inside the pen holder. [8 TOUCH SHORTCUTS]--They are areavailable to customize in GAOMON driver.</li>
                <li style={{marginBottom:"20px"}}>
                    【1000: 1 CONTRAST RATIO】--Enables more clear and vivid images effects. 【OTHER DISPLAY INFO】--Max<br/>
                    Viewing Angle: 89°/89°(H)/89°/89°(V) (Typ.)(CR＞10). Display Area: 476.64 x 268.11mm(18.8*10.6 inches).<br/>
                    Resonse Time: 25MS. 【HOW TO UNSE OSD MENU】--Longe Press Menu Button for 6 seconds to active the OSD<br/>
                    panel. You can adjust the color, brightness, etc here. 【HOW TO ADJUST COLOR】--Go to RGB-Color--Color<br>
                    </br> Effect--Enter ''USER''--Then you can adjust the hue & saturation of RGBCYM here.</li>
            </ul></div>
            </div>  
        )
    }
}

export default Des2;