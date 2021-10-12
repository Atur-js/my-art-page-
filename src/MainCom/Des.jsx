import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class Des extends Component {
    state = { showing: true };

    render() {
        const { showing } = this.state;
        return (
            <div>
                <Button onClick={() => this.setState({ showing: !showing })} style={{color:'white',
                border:'none',height:'40px', marginLeft:'45px'}}>DESCRIPTION</Button>


                <div style={{ display: (showing ? 'block' : 'none') }}>
                    <ul style={{color:'black',listStyle:'none',marginTop:"35px"}}>
                <li style={{marginBottom:"20px"}}>
                    【Up to 35% Brigher Writing】Adopting the latest LCD pressure-sensitive 
                    , this<br/> new version of LCD writing tablet for kids is about 35% brighter
                    than the old version.<br/> Without radiation and glare, the LCD screen better protects
                    your eyes.
                </li>
                <li style={{marginBottom:"20px"}}>
                    【Up to 50% Longer Battery Life & Environmental-Friendly】With 2 built-in replaceable<br/>
                    battery, This LCD Writing Tablet can be erased and rewrite over 100,000 times, which<br/>
                    means one Drawing Pad saves 100,000 pcs paper by 3 trees.
                </li>
                <li style={{marginBottom:"20px"}}>
                    【Memory Lock Function】Lock the screen to prevent accidental deletion. Don't 
                    about<br/> losing your great ideas any more. Please kindly note that the lock button is<br/>
                    on when you receive the new package.
                </li>
                <li style={{marginBottom:"20px"}}>
                    【Stylus with Spring Rope】The spring rope helps you connect the doodle pad and the<br/>
                    stylus pen. No need to worry about missing your stylus. Great for writing, drawing,<br/>
                    doodling, reminding, draft, office memo board and as a communication tool.
                </li>
            </ul></div>
            </div>  
        )
    }
}

export default Des;