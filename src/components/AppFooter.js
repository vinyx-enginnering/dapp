import React, {useState} from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import {
  FaArrowAltCircleRight,
  FaFacebookSquare,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitterSquare,
  FaUser,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { send_newsletter } from "../actions/message.js";

function AppFooter() {
  const [email, setEmail] = useState("");

  const Newsletter = useSelector((state) => state.Newsletter);
  const { loading, error, newsletter } = Newsletter;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if (email === "") {
      alert("Kindly fill in your email, to sign up");
    } else {
      dispatch(send_newsletter(email));
    }
  };
  return (
    <div className=" bg-dark py-5 text-light">
      <div className="container">
        <Row>
          <Col sm={12} md={4} lg={4}>
            <div>
              <h2 className="display-6" style={{ color: "#8c5eff" }}>
                Doublelink
              </h2>
              <p className="lead">
                Business portal allows it merchants to serve their customers
                with various mobile services and earn cashback as rewards
              </p>
              <div>
                <span style={{ color: "#8c5eff" }}>Head Office</span>
                <p>KM 97 Adebayo Avenue, off Ondo Road, Ondo State</p>
              </div>
            </div>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <h4 className="lead text-secondary ">Company</h4>

              <a href="/" className=" text-decoration-none text-light">
                Home
              </a>
              <a href="/contact" className=" text-decoration-none text-light">
                Contact
              </a>
              <a href="/faq" className=" text-decoration-none text-light">
                FAQ
              </a>
              <a href="/login" className=" text-decoration-none text-light">
                Portal
              </a>
              <a
                href="/cookie-policy"
                className=" text-decoration-none text-light"
              >
                Cookie Policy
              </a>
              <a href="/privacy" className=" text-decoration-none text-light">
                Legal
              </a>
            </div>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <div>
              <h4>
                Sign up to our weekly{" "}
                <span style={{ color: "#8c5eff" }}>newsletter.</span>
              </h4>
                {loading && <p className="lead text-light">Signing up</p>}
                {error && <p className="lead text-danger">Somethings went wrong, try again</p>}
                {newsletter && <p className="lead" style={{color: "#8c5eff"}}>Nice! expect cool stuff... </p>}

              <Form className="d-flex" onSubmit={submitHandler}>
                <Form.Control
                  type="email"
                  placeholder="Enter email address"
                  className="me-2"
                  aria-label="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button variant="primary" type="submit">
                  <FaArrowAltCircleRight />
                </Button>
              </Form>
              <div className="d-flex pt-3 pb-5">
                <Button
                  variant="outline-primary"
                  target="_blank"
                  href="https://linkedin.com/company/doublelink"
                >
                  <FaLinkedinIn />
                </Button>
                <Button
                  variant="outline-light"
                  className="mx-2"
                  target="_blank"
                  href="https://web.facebook.com/Doublelink-Mobile-106818018775194"
                >
                  <FaFacebookSquare />
                </Button>
                <Button variant="outline-success">
                  <FaInstagram />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <div>
          <p className="text-center" style={{ color: "#8c5eff" }}>
            Copyright 2022. Doublelink Business Solution |{" "}
            <a href="#" className="text-decoration-none text-light">
              support@doublelinkng.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AppFooter;
