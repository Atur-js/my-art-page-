import React , { useContext } from 'react';
import { Container, Navbar, Nav,Form,Button,FormControl} from 'react-bootstrap';
import image from "../image/Logo2.svg";
import { CartContext } from '../contexts/CartContext';
import { Badge } from '@material-ui/core';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ProductsData from "./../Data.json";
import SearchBar from '../components/SearchBar';

const Head = (props) => {

    const {itemCount} = useContext(CartContext);
    return (
        <React.Fragment>
            <Navbar  expand="lg" sticky="top"style={{fontFamily:'serif',fontSize:'20px',backgroundColor:'#886bf2',position:"fixed",width:"100%"}}>
            <Container>
            <Navbar.Brand href="/"><img src={image} style={{height:"55px", width:"150px"}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/" style={{color:'white',fontWeight:'bolder'}}><i class="fa fa-home " style={{marginRight:"5px"}}></i>Home</Nav.Link>
            <Nav.Link href="./Carousels"><i class="fas fa-user-plus" style={{marginRight:"5px",color:'#231557'}}></i>Sign Up</Nav.Link>
            <Nav.Link href="./Carousels2"><i class="fas fa-user-crown"style={{marginRight:"5px",color:'#231557'}}></i>Log In</Nav.Link>
            <Nav.Link href="./mainLayout" className="nav-item active"><i class="fas fa-shopping-bag"style={{marginRight:"5px",color:'#231557'}}></i>Products</Nav.Link>
            <Nav.Link href='./cart'><Badge color="primary" id="badgeForItem" badgeContent={itemCount}><ShoppingCartIcon style={{color:"#231557",marginBottom:"5px"}} color="#231557"/>{""}</Badge></Nav.Link>
            {/* <Nav.Link className="d-flex justify-content-center" style={{marginLeft:"300px"}} ><SearchBar   placeholder="Search ..." data={ProductsData}/></Nav.Link> */}
            </Nav>
            <Navbar.Collapse style={{justifyContent:"center",marginLeft:"40px"}}>    
                <SearchBar style={{marginRight:"400px"}} placeholder="Search ..." data={ProductsData}/>
            </Navbar.Collapse> 
            </Navbar.Collapse>
            </Container>
            </Navbar>
            
        </React.Fragment>
            );
}

export default Head;

