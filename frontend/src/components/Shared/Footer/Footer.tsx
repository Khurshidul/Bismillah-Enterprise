import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Button, Form, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Mesenger from "../Mesenger/Mesenger";
interface PropTypes {}

const Footer: React.FC<PropTypes> = () => {
  const github = faGithub as IconProp;
  const facebook = faFacebook as IconProp;
  const twiter = faTwitter as IconProp;
  const instagram = faInstagram as IconProp;
  const linkedin = faLinkedin as IconProp;
  return (
    <footer className="footer">
      <div className="social-icons">
        <ul>
          <li>
            <NavLink to={""}>
              <FontAwesomeIcon className="brand-icons" icon={github} />
            </NavLink>
          </li>
          <li>
            <NavLink to={""}>
              <FontAwesomeIcon className="brand-icons" icon={twiter} />
            </NavLink>
          </li>
          <li>
            <NavLink to={""}>
              <FontAwesomeIcon className="brand-icons" icon={facebook} />
            </NavLink>
          </li>
          <li>
            <NavLink to={""}>
              <FontAwesomeIcon className="brand-icons" icon={instagram} />
            </NavLink>
          </li>
          <li>
            <NavLink to={""}>
              <FontAwesomeIcon className="brand-icons" icon={linkedin} />
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <div className="footer-field1">
          <h5 className="address">Address</h5>
          <p>
            P.C Road, Sagorika, Pahartali,
            <br />
            Chittagong, Bangladesh.
          </p>
          <p className="email">Email: khurshidulalam5@gmail.com</p>
          <p className="email">Phone: +8801956-108879</p>
        </div>
        <div className="footer-field2">
          <h5>Properties</h5>
          <Nav.Link active className="navList" as={Link} to="/home#home">
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
        </div>
        <div className="footer-field3">
          <h5>Services</h5>
          <div>
            <p>Project Deal</p>
            <p>Materials Buy & Sell</p>
            <p>Man Power</p>
            <p>Painting</p>
          </div>
        </div>
        <div className="footer-field4">
          <h5>NewsLetter</h5>
          <Form.Control
            type="text"
            placeholder="Enter your Name"
            className=" mr-sm-2"
          />
          <br />
          <Form.Control
            type="email"
            placeholder="Enter your Email"
            className="mr-sm-2"
          />
          <br />
          <Button variant="outline-danger" className="newsletter" type="submit">
            Submit
          </Button>
        </div>
      </div>
      <Mesenger />
      <div className="copyright">
        <p>
          <small> ----------------- </small>
          <small>
            <FontAwesomeIcon icon={faCopyright} />
          </small>
          Copyright
          <small> ---------------- </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
