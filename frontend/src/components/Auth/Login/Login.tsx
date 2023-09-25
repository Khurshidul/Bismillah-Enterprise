import React, { useContext, useState } from "react";
import "./Login.css";
import { Container, Row, Col, Form, Button, Nav } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
type formType = {
  email: string;
  password: string;
};
const userInitialState = {
  email: "",
  password: "",
};

interface PropTypes {}

const Login: React.FC<PropTypes> = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const [userData, setUserData] = useState<formType>(userInitialState);
  //Login Input data
  const onChange = (e: React.FormEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setUserData({ ...userData, [name]: value });
  };
  //Login submit function ...
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    signIn(userData.email, userData.password).then((result: any) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully Signin...",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
    setUserData(userInitialState);
  };
  return (
    <div id="login-container">
      <Container id="login-style">
        <Row className="login-validation">
          <Col>
            <h2 login-heading>Sign In</h2>
            <Form onSubmit={onSubmit}>
              <Form.Group className="">
                <Form.Label className="" htmlFor="email">
                  Email address
                </Form.Label>
                <Form.Control
                  className="form-control"
                  type="email"
                  name="email"
                  onChange={onChange}
                  value={userData.email}
                  placeholder="Enter email"
                  required={true}
                />
              </Form.Group>

              <Form.Group className="">
                <Form.Label className="" htmlFor="password">
                  Password
                </Form.Label>
                <Form.Control
                  className="form-control"
                  type="password"
                  name="password"
                  onChange={onChange}
                  value={userData.password}
                  placeholder="Password"
                  required={true}
                />
              </Form.Group>

              <Button id="sb-btn" type="submit">
                Submit
              </Button>
            </Form>

            <Button
              id="google-login"
              onClick={() => signInWithGoogle()}
              variant="dark">
              Sign up with Google
            </Button>
            <Nav.Link as={Link} to="/Register">
              <p>
                Create an account{" "}
                <span style={{ color: "blue" }}> Register</span>{" "}
              </p>
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
