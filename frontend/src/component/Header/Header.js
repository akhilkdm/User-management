import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function CollapsibleExample() {
  const user = localStorage.getItem("userInfo");
  if (user) {
    const json = JSON.parse(user);
    var userName = json.name;
  }

  return (
    

    <Navbar>
      <Container>
        <Navbar.Brand href="#home"> APPLICATION</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavDropdown
              title={userName ? userName : "LOGIN"}
              id="collasible-nav-dropdown"
            >
              {userName && (
                <NavDropdown.Item >
                  <Link
                    to="/"
                    onClick={() => {
                      localStorage.removeItem("userInfo");
                    }}
                  >
                    Logout
                  </Link>
                </NavDropdown.Item>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
