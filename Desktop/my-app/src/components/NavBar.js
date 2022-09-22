import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "./CartWidget";
import  "./CartWidget.css";
const NavBar = () => {
    return (
        <Navbar bg="dark">
          <Container>
          <Navbar.Brand href="#home">
            Tienda  
          </Navbar.Brand>
           <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Hombre</Nav.Link>
            <Nav.Link href="#pricing">Niño</Nav.Link>
           </Nav>
           <CartWidget />
          </Container>
        </Navbar>
    )
}

export default NavBar;