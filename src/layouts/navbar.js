import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import em from '../assets/inicio.png'

const NavBarExample = () => {
    return(
       <>    
       <Navbar className="navBg" variant="dark" expand="lg">
        <Container>
            <div className="log">
            <Navbar.Brand as={Link} to="/home"><img src= {em}/></Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/home" >INICIO</Nav.Link>
                <Nav.Link as={Link} to="/about">OFERTAS</Nav.Link>
                <Nav.Link as={Link} to="/contact">CONTACTANOS</Nav.Link>       
                <Nav.Link as={Link} to="/Otros">OTROS</Nav.Link>            
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>  
      
        

        <section>
            <Outlet></Outlet>
        </section> 
       </> 
    )
}
export default NavBarExample