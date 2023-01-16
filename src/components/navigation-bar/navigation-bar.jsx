
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavigationBar = ({ user, onLoggedOut }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">myFlix</Navbar.Brand>
          <Nav className="me-auto">
            {!user && (
                <>
                <Nav.Link as={Link} to="/login">
                    Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                    Register
                </Nav.Link>
                </>
            )}
            {user && (
                <>
                <Nav.Link as={Link} to="/">
                    Home
                </Nav.Link>
                <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
                </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
);
}    