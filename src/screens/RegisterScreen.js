import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { register } from "../actions/user";

const Register = () => {
  const [fullname, setFullName] = useState("");
  const [access_token, setAccessToken] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      return navigate("/dashboard");
    }
  }, [dispatch, navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      email === "" ||
      fullname === "" ||
      password === "" ||
      phone_number === "" ||
      access_token === ""
    ) {
      return alert("Kindly fill in all fields")
    } else {
      dispatch(register(access_token, fullname, phone_number, email, password));
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        marginTop: "20px",
      }}
    >
      <FormContainer>
        <div style={{ display: "flex" }}>
          <img
            src={require("../assets/images/icon.png")}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              marginBottom: "1rem",
            }}
            alt="logo"
          />

          <h3
            className=""
            style={{ color: "#8c5eff", margin: "8px 0px", padding: "0px" }}
          >
            {" "}
            | Double Link
          </h3>
        </div>

        <p className="lead m-0 p-0">register a new account</p>
        <hr />

        {loading && <Loader />}
        {error && <Message variant="danger">{error}</Message>}

        <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
            <Form.Label>Activation Token</Form.Label>
            <Form.Control
              type="name"
              placeholder="Paste Token here"
              value={access_token}
              onChange={(e) => setAccessToken(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Full Name"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="gender">
            <Form.Label>Phone Number </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Phone Number"
              value={phone_number}
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter secure passcode"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <div className="mt-1">
            <div className="form-check">
              <label className="form-check-label text-muted">
                <input type="checkbox" className="form-check-input" />
                <i className="input-helper"></i>I agree to all{" "}
                <a href="/terms-and-conditions" style={{ color: "#8c5eff" }}>
                  Terms & Conditions
                </a>
              </label>
            </div>
          </div>

          <div className="d-grid gap-2">
            <Button
              type="submit"
              variant="primary"
              className="btn-block mt-3"
              style={{ backgroundColor: "#8c5eff", border: "none" }}
            >
              Register
            </Button>
          </div>
        </Form>

        <Row className="py-3">
          <Col>
            Have an account ? <Link to={"/login"}>Login</Link>
          </Col>
        </Row>
      </FormContainer>
    </div>
  );
};

export default Register;
