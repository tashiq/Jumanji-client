import { Container, Nav, Navbar } from "react-bootstrap";
// import { Nav.Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import useAuth from "../../hooks/useAuth";

const Header = () => {
    const { user, logOut } = useAuth();

    // console.log(user);
    return (
        <Navbar bg="dark" expand="lg" variant="dark" className="text-white" fixed="top">
            <Container>
                <Navbar.Brand href="#home" className="text-uppercase fs-3">Jumanji park</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Spots</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#gallery">Gallery</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#events">Events</Nav.Link>
                        {
                            user.email ?
                                <div id="special">
                                    <Nav.Link as={HashLink} to="/add" className="">Add an Spot</Nav.Link>
                                    <Nav.Link as={HashLink} to="/manage">Manage Orders</Nav.Link>
                                    <Nav.Link as={HashLink} to="/orders">My Reservations</Nav.Link>
                                    <button onClick={logOut} className="btn bg-white" title="log out">
                                        <span>{user.displayName + ' '}</span>
                                        <i className="fas fa-sign-out-alt"></i>
                                    </button>
                                </div>
                                :
                                <Nav.Link as={HashLink} to="/login">LogIn</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;