import React, { useRef } from "react";
import "./Contact.css";
import { Col, Row } from "react-bootstrap";
import GoogleMap from "../Home/GoogleMap/GoogleMap";
import emailjs, { sendForm } from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const sendForm = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tv74geg",
        "template_lhog36d",
        formRef.current,
        "iX13szLC-1kAZqDeA",
      )
      .then(
        () => {
          alert("Message successfully sent...Thank You!");
          window.location.reload(false);
        },
        () => {
          alert("Message could not sent...Please try again");
        },
      );
  };
  return (
    <>
      <div className="container contact-page">
        <h1>Contact Us</h1>
        <p>
          I am interested in freelance opportunities - especially on ambitious
          or large projects. However, if you have any other requests or
          questions, don't hesitate to contact me using below form either.
        </p>
        <div className="contact-form">
          <form ref={formRef} onSubmit={sendForm}>
            <ul>
              <li className="half">
                <input placeholder="Name" type="text" name="name" required />
              </li>
              <li className="half">
                <input placeholder="Email" type="email" name="email" required />
              </li>
              <li>
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className="address">
        <h2>Office Address</h2>
        <Row></Row>
        <GoogleMap />
      </div>
    </>
  );
};

export default Contact;
