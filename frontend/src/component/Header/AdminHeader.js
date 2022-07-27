import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function CollapsibleExample() {
  const admin = localStorage.getItem("admininfo");

    const json = JSON.parse(admin);
    var adminName =json
  

  return (
    

    <Navbar>
      <Container>
        <Navbar.Brand href="#home">ADMIN PANEL</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavDropdown
              title={admin ? "ADMIN" : "LOGIN"}
              id="collasible-nav-dropdown"
            >
              {admin && (
                <NavDropdown.Item >
                  <Link
                    to="/admin"
                    onClick={() => {
                      localStorage.removeItem("admininfo");
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
