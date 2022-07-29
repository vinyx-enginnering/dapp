import React from "react";
import "../assets/css/styles.css";
import {
  FaCheck,
  FaCheckCircle,
  FaCheckDouble,
  FaCross,
  FaDeskpro,
  FaDesktop,
  FaGooglePlay,
  FaMailBulk,
  FaPrint,
  FaSave,
  FaWallet,
  FaWeightHanging,
} from "react-icons/fa";
import {
  Row,
  Col,
  Container,
  Image,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import AppFooter from "../components/AppFooter";

function HomeScreen() {
  return (
    <>
      <div
        className="bg-dark"
        style={{ borderBottom: "6px solid #8c5eff", height: "100%" }}
      >
        <Container>
          <Row>
            <Col md={6} sm={12} lg={6}>
              <div
                className="my-5"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h1 className="display-3 fw-bolder text-white mb-2 my-5">
                  Present your{" "}
                  <span style={{ color: "#8c5eff" }}>business</span> in a whole
                  new way<span style={{ color: "#8c5eff" }}>.</span>
                </h1>
                <p className="lead text-secondary">
                  Welcome. Our goal is to ensure you enjoy flexible and reliable
                  access to mobile services from anywhere.
                </p>
                <div className="mt-3">
                  <a
                    className="btn btn-primary btn-lg px-4 me-sm-3 mx-2"
                    href="/register"
                  >
                    Get Started
                  </a>
                  <a className="btn btn-outline-light btn-lg px-4" href="#features">
                    Learn More
                  </a>
                </div>
              </div>
            </Col>
            <Col md={6} sm={12} lg={6}>
              <Image
                src={require("../assets/images/dell.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                title="Mobile Service"
              ></Image>
            </Col>
          </Row>
        </Container>
      </div>

      <section className="py-5 border-bottom bg-light" id="features">
        <h2 className="text-center fw-bolder py-4">
          Earn more, With added{" "}
          <span style={{ color: "#8c5eff" }}>Exclusive</span> Services{" "}
        </h2>
        <Container className="py-5">
          <Row>
            <Col md={4} sm={12} lg={4}>
              <Card>
                <Card.Body>
                  <h3 className="fw-bolder py-3" style={{ color: "#8c5eff" }}>
                    EPIN Manager.
                  </h3>
                  <p className="lead">
                    Gain more interest, by purchasing and printing your very own
                    <span style={{ color: "#8c5eff" }}>
                      {" "}
                      customizable and unique
                    </span>{" "}
                    recharge card vouchers.
                  </p>
                  <a href="/feature" className="btn btn-primary btn-md">
                    Learn more
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12} lg={4}>
              <Card>
                <Card.Body>
                  <h3 className="fw-bolder py-3" style={{ color: "#8c5eff" }}>
                    Mobile Money Service.
                  </h3>
                  <p className="lead">
                    Earn more profit with added vtu services that allows you to
                    profit by offering{" "}
                    <span style={{ color: "#8c5eff" }}>Mobile Services</span>{" "}
                    with friendly discounts.
                  </p>
                  <a href="/feature" className="btn btn-primary btn-md">
                    Learn more
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12} lg={4}>
              <Card>
                <Card.Body>
                  <h3 className="fw-bolder py-3" style={{ color: "#8c5eff" }}>
                    Bulk Messaging Service.
                  </h3>
                  <p className="lead">
                    Optimize and improve your business by offering bulk{" "}
                    <span style={{ color: "#8c5eff" }}>
                      SMS & Whatsapp messaging
                    </span>{" "}
                    services to your customers.
                  </p>
                  <a href="/feature" className="btn btn-primary btn-md">
                    Learn more
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="py-5"
        style={{ backgroundColor: "#8c5eff", borderBottom: "6px solid yellow" }}
      >
        <Container>
          <Row>
            <Col md={6} sm={12} lg={6}>
              <Image
                src={require("../assets/images/dell.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                title="Mobile Service"
              ></Image>
            </Col>

            <Col md={6} sm={12} lg={6}>
              <div
                className="my-5"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h1 className="display-4 fw-bolder text-white mb-2 my-5">
                  Join <span style={{ color: "yellow" }}>Doublelink Tribe</span>
                </h1>
                <p className="lead text-light">
                  With <span style={{ color: "yellow" }}>doublelink tribe</span>{" "}
                  you gain access{" "}
                  <span className="fw-bolder text-bolder text-light">
                    reliable customer support
                  </span>
                  ,{" "}
                  <span className="fw-bolder text-light">
                    safe & secured payment system
                  </span>
                  ,{" "}
                  <span className="fw-bolder text-light">
                    swift service delivery
                  </span>
                  .
                </p>

                <div className="btn btn-outline-light btn-lg mt-4">
                  <FaGooglePlay /> Download mobile app
                </div>
                <div className="btn btn-outline-light btn-lg mt-3" href="/login">
                  <FaDesktop /> Use the Web portal
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <!-- Pricing section--> */}
      <section className="bg-light py-5 border-bottom">
        <div className="container px-5 my-5">
          <div className="text-center mb-5">
            <h2 className="fw-bolder">Pay Once and Get Activated!</h2>
            <p className="lead mb-0">
              Get started with a flexible pricing that allows you to focus on
              making profit
            </p>
          </div>
          <div className="row gx-5 justify-content-center">
            {/* <!-- Pricing card free--> */}

            {/* <!-- Pricing card pro--> */}
            <div className="col-lg-6 col-xl-4">
              <div className="card mb-5 mb-xl-0">
                <div className="card-body p-5">
                  <div className="small text-uppercase fw-bold">
                    <i className="bi bi-star-fill text-warning"></i>
                    Activation
                  </div>
                  <div className="mb-3">
                    <span className="display-4 fw-bold">N10,000</span>
                    <span className="text-muted"></span>
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <FaCheckCircle color="#8c5eff" />{" "}
                      <strong>Mobile App</strong>
                    </li>
                    <li className="mb-2">
                     
                      <FaCheckCircle color="#8c5eff" /> Portal Access
                    </li>
                    <li className="mb-2">
                     
                      <FaCheckCircle color="#8c5eff" /> Desktop Solution
                    </li>
                    <li className="mb-2">
                     
                      <FaCheckCircle color="#8c5eff" /> EPIN Manager
                    </li>
                    <li className="mb-2">
                     
                      <FaCheckCircle color="#8c5eff" /> Cable TV Subscriptions
                    </li>
                    <li className="mb-2">
                     
                      <FaCheckCircle color="#8c5eff" /> Mobile Topup
                    </li>
                    <li className="mb-2">
                     
                      <FaCheckCircle color="#8c5eff" /> Internet Subscriptions
                    </li>
                    <li className="mb-2">
                     
                      <FaCheckCircle color="#8c5eff" /> Whatsapp & SMS Bulk
                      Messaging
                    </li>
                    <li className="">
                     
                      <FaCheckCircle color="#8c5eff" /> Buy epins
                    </li>
                  </ul>
                  <div className="d-grid">
                    <a className="btn btn-primary" href="/register">
                      Choose plan
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Pricing card enterprise--> */}
            <div className="col-lg-6 col-xl-4">
              <div className="card">
                <div className="card-body p-5">
                  <div className="small text-uppercase fw-bold text-muted">
                    free
                  </div>
                  <div className="mb-3">
                    <span className="display-4 fw-bold">N0.00</span>
                    <span className="text-muted"></span>
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <FaCheckCircle color="#8c5eff" />{" "}
                      <strong>Mobile App</strong>
                    </li>
                    <li className="mb-2 text-decoration-line-through">
                     
                      Portal Access
                    </li>
                    <li className="mb-2 text-decoration-line-through">
                     
                      Desktop Solution
                    </li>
                    <li className="mb-2 text-decoration-line-through">
                     
                      EPIN Manager
                    </li>
                    <li className="mb-2 text-decoration-line-through">
                     
                      Cable TV Subscriptions
                    </li>
                    <li className="mb-2">
                     
                      <FaCheckCircle color="#8c5eff" /> Mobile Topup
                    </li>
                    <li className="mb-2">
                     
                      <FaCheckCircle color="#8c5eff" /> Internet Subscriptions
                    </li>
                    <li className="mb-2 text-decoration-line-through">
                     
                      Whatsapp & SMS Bulk Messaging
                    </li>
                    <li className="text-decoration-line-through">
                     
                      Buy epins
                    </li>
                  </ul>
                  <div className="d-grid">
                    <a className="btn btn-outline-dark" href="#">
                      Download Mobile App
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 mb-5">
        <div className="container px-5 bg-dark py-5 text-center text-light">
          <h1>Sign up now, and Get started</h1>
          <div className="mt-3">
            <a className="btn btn-primary btn-lg px-5 mx-2" href="/register">
              Sign up
            </a>
            <a className="btn btn-outline-light btn-lg px-2" href="/contact">
              Request for Access
            </a>
          </div>
        </div>
      </section>

      
      <AppFooter />
    </>
  );
}

export default HomeScreen;
