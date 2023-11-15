import React, { useContext } from "react";
import "./Navigation.css";
import {
  Button,
  Col,
  Container,
  Nav,
  NavItem,
  Navbar,
  Row,
} from "react-bootstrap";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

interface Err {
  message: string;
}
interface PropTypes {}
const Navigation: React.FC<PropTypes> = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSingOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Sign Out...",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err: Err) => console.log(err));
  };
  const uid = user;

  return (
    // <div className="navigation">
    <Row className="navigation">
      <Col lg={9} md={9} xs={2} sm={2}>
        <Navbar
          // className="nav-position"
          collapseOnSelect
          expand="lg"
          variant="dark">
          <Container className="navbar-list">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="navbar-list" defaultActiveKey="/home#home">
                  <Nav.Link
                    active
                    className="navList"
                    as={Link}
                    to="/home#home">
                    <h6 className="navitem">Home</h6>
                  </Nav.Link>
                  <Nav.Link className="navList" as={Link} to="/projects">
                    <h6>Projects</h6>
                  </Nav.Link>
                  <Nav.Link className="navList" as={Link} to="/materials">
                    <h6>Materials</h6>
                  </Nav.Link>
                  <Nav.Link className="navList" as={Link} to="/opportunities">
                    <h6>Opportunities</h6>
                  </Nav.Link>
                  <Nav.Link className="navList" as={Link} to="/contact">
                    <h6>Contact</h6>
                  </Nav.Link>
                  <Nav.Link className="navList" as={Link} to="/admin">
                    <h6>About Us</h6>
                  </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
      <Col id="sign-in-out" lg={3} md={3} xs={10} sm={10}>
        <Nav className="sign-in-out">
          {uid ? (
            <Button
              className="logout"
              onClick={handleSingOut}
              variant="outline-danger">
              Sign Out
            </Button>
          ) : (
            <Nav>
              <Nav.Link as={Link} to="/login">
                <Button className="login" variant="outline-danger">
                  Sign In
                </Button>
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                <Button className="login" variant="outline-danger">
                  Sign Up
                </Button>
              </Nav.Link>
            </Nav>
          )}
        </Nav>
      </Col>
    </Row>
    // </div>
  );
};

export default Navigation;
