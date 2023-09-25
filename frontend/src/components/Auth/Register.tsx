import React, { useState, useContext } from "react";
import "./Register.css";
import Swal from "sweetalert2";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { AuthContext } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
type formType = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};
const initialState = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};
interface PropTypes {}
const Register: React.FC<PropTypes> = () => {
  //navigation after sign up
  const navigate = useNavigate();

  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [newUserData, setNewUserData] = useState<formType>(initialState);
  const [error, setError] = useState<string>("");
  const onChange = (e: React.FormEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setNewUserData({ ...newUserData, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newUserData.confirm_password) {
      if (newUserData.password !== newUserData.confirm_password) {
        console.log("Password doesn't match...");
        return;
      }
    }
    createUser(newUserData.email, newUserData.password).then((result: any) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully SignUp...",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    });
    setNewUserData(initialState);

    if (newUserData?.password.length < 8) {
      setError("Password should be at least 8 characters.");
    }
    if (newUserData?.confirm_password !== newUserData?.password) {
      setError("Password doesn't match...Please try againg.");
    }
  };

  return (
    <div className="form">
      <Container id="reg-style">
        <Row className="reg-validation">
          <br />
          <br />
          <Col>
            <h2 id="registration-heading">Sign Up</h2>
            <Form onSubmit={onSubmit}>
              <Form.Group className="form-grp">
                <Form.Label className="label" htmlFor="name">
                  Full Name
                </Form.Label>
                <br />
                <Form.Control
                  className="form-control"
                  type="text"
                  name="name"
                  onChange={onChange}
                  value={newUserData.name}
                  placeholder="Your name"
                  required={true}
                />
              </Form.Group>

              <Form.Group className="form-grp">
                <Form.Label className="label" htmlFor="email">
                  Email address
                </Form.Label>
                <Form.Control
                  className="form-control"
                  type="email"
                  name="email"
                  onChange={onChange}
                  value={newUserData.email}
                  placeholder="Enter email"
                  required={true}
                />
              </Form.Group>

              <Form.Group className="form-grp">
                <Form.Label className="label" htmlFor="password">
                  Password
                </Form.Label>
                <Form.Control
                  className="form-control"
                  type="password"
                  name="password"
                  onChange={onChange}
                  value={newUserData.password}
                  placeholder="Password"
                  required={true}
                />
              </Form.Group>
              <Form.Group className="form-grp">
                <Form.Label className="label" htmlFor="confirm-password">
                  Confirm Password
                </Form.Label>
                <Form.Control
                  className="form-control"
                  type="password"
                  name="confirm_password"
                  onChange={onChange}
                  value={newUserData.confirm_password}
                  placeholder="Confirm Password"
                  required={true}
                />
              </Form.Group>

              <Button id="submit-btn" type="submit">
                Submit
              </Button>
              {/* {newUserData.password !== newUserData.confirm_password && (
                <h6 className="pass-match">{error}</h6>
              )} */}
            </Form>
            <p className="pass-match">{error}</p>

            <Button id="google-login" onClick={signInWithGoogle} variant="dark">
              Google Sign In
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
