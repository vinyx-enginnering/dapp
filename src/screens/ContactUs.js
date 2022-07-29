import React, {Fragment, useState} from "react";
import { ListGroup, ListGroupItem, Form, Button } from "react-bootstrap";
import { FaArrowCircleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { contact_us } from "../actions/message.js";
import AppFooter from "../components/AppFooter.js";

function ContactUs() {
  const [message, setMessage] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const sendMessage = useSelector((state) => state.sendMessage);
  const { loading, error, message: response_message } = sendMessage;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    
    if (message === "" || email === "") {
      alert("Kindly fill out the form");
    } else {
      dispatch(contact_us(message, email, fullname));
      setMessage();
    }
  };

  return (
    <Fragment>
    <div className="container mt-3">
      <div className="bg-light p-5">
        <h1 className="display-2" style={{ color: "#8c5eff" }}>
          Get in touch with us
        </h1>

        <hr />
        <ListGroup>
          <ListGroupItem className="p-2 lead">
            <span style={{ color: "#8c5eff" }}>Contact Line:</span> +234 701
            7642 649
          </ListGroupItem>

          <ListGroupItem className="p-2 lead">
            <span style={{ color: "#8c5eff" }}>Email us on:</span>{" "}
            support@doublelinkng.com
          </ListGroupItem>

          <ListGroupItem className="p-2 lead">
            <span style={{ color: "#8c5eff" }}>Visit us @</span> KM 97 Adebayo
            Avenue, off Ondo Road, Ondo State
          </ListGroupItem>
          <ListGroupItem className="p-2 lead">
            <span style={{ color: "#8c5eff" }}>We are always available: </span>{" "}
            Monday - Friday 9AM - 5PM
          </ListGroupItem>
        </ListGroup>
        <hr />
        {response_message && <p className="lead" style={{color: "#8c5eff"}}>Your message has been send to our support center, we'll get in touch soon..</p>}
        <Form
          className="text-light lead p-4"
          style={{ width: "100%", backgroundColor: "#8c5eff" }}
          onSubmit={submitHandler}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Fullname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-light">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>How can we help you?</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              row={4}
              placeholder="Kindly leave us a detail message "
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>
          <div className="d-grid">
            <Button variant="outline-light" className="" type="submit">
              <FaArrowCircleRight /> {loading ? "We're sending your message " : "Send"}
            </Button>
          </div>
        </Form>
      </div>
    </div>
    <AppFooter />
    </Fragment>
  );
}

export default ContactUs;
