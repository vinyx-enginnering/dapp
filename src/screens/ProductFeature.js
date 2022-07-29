import React, { Fragment, useState } from "react";
import { Row, Col, Image, ListGroup, ListGroupItem, Modal, Button } from "react-bootstrap";
import AppFooter from "../components/AppFooter";

function ProductFeature() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Fragment>
      <div className="bg-light pt-3 " style={{borderBottom: "2px solid blue"}}>
        <div className="container p-5">
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
                <h1 className="display-3 fw-bolder text-dark mb-2 my-5">
                  Awesomeness <span style={{ color: "#8c5eff" }}>awaits</span>{" "}
                  you!
                </h1>
                <p className="lead text-secondary">
                  With features and products designed to help your business
                  excel
                </p>
                <div className="mt-3">
                  <a className="btn btn-primary btn-lg px-4" href="/login">
                    Get Activated
                  </a>
                  <a
                    className="btn btn-outline-dark btn-lg mx-2 px-4"
                    href="#feature"
                  >
                    Scroll down
                  </a>
                </div>
              </div>
            </Col>
            <Col md={6} sm={12} lg={6}>
              <div style={{ margin: "0px" }}>
                <Image
                  src={require("../assets/images/awesome.png")}
                  style={{
                    width: "100%",
                    height: "40rem",
                  }}
                  title="Happy Hour"
                ></Image>
              </div>
            </Col>
          </Row>
        </div>

        <section className="bg-dark p-5" id="feature" style={{borderBottom: "2px solid white"}}>
          <div className="container text-light">
            <Row>
              <Col md={6} sm={12} lg={6}>
                <div
                  className=""
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <p className="text-muted mb-0 pt-0">
                    Recharge Card Entrepreneur
                  </p>
                  <h1 className="display-3 fw-bolder text-light mb-2 mt-0 pt-0">
                    EPIN Manager
                  </h1>
                  <p className="lead text-light">
                    Print airtime voucher, that your customers will love 🏆
                  </p>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Image
                    src={require("../assets/images/sample.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    title="Happy Hour"
                  ></Image>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="primary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>

                  <div className="mt-3">
                    <ListGroup variant="dark">
                      <ListGroupItem action variant="dark">
                        Order epins from our registered vendors
                      </ListGroupItem>
                      <ListGroupItem action variant="dark">
                        Print Business Name on Voucher
                      </ListGroupItem>
                      <ListGroupItem action variant="dark">
                        Different Colour for different Denominations{" "}
                        <a style={{color: "#8c5eff"}} onClick={handleShow}>View sample</a>
                      </ListGroupItem>
                    </ListGroup>
                  </div>
                </div>
              </Col>
              <Col md={6} sm={12} lg={6}>
                <div style={{ margin: "0px" }}>
                  <Image
                    src={require("../assets/images/dell.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    title="Happy Hour"
                  ></Image>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        <section className="p-5" id="vtu" style={{backgroundColor: "#8c5eff", borderBottom: "2px solid yellow"}}>
          <div className="container text-light">
            <Row>
              <Col md={6} sm={12} lg={6}>
                <div
                  className=""
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <p className="text-muted mb-0 pt-0">
                    VTU Vendors
                  </p>
                  <h1 className="display-3 fw-bolder text-light mb-2 mt-0 pt-0">
                    Mobile Money Services
                  </h1>
                  <p className="lead text-light">
                    Earn Cashbacks 🏆 whenever you purchase services for your customers 
                  </p>
                  

                  <div className="mt-3">
                    <ListGroup variant="dark">
                      <ListGroupItem action variant="dark">
                        Internet Subscriptions
                      </ListGroupItem>
                      <ListGroupItem action variant="dark">
                        Data Bundles 
                      </ListGroupItem>
                      <ListGroupItem action variant="dark">
                        Airtime
                      </ListGroupItem>
                      <ListGroupItem action variant="dark">
                        Scubscriptions and more..
                      </ListGroupItem>
                    </ListGroup>
                  </div>
                </div>
              </Col>
              <Col md={6} sm={12} lg={6}>
                <div style={{ margin: "0px" }}>
                  <Image
                    src={require("../assets/images/apps.png")}
                    style={{
                      width: "50%",
                      height: "50%",
                    }}
                    title="Happy Hour"
                  ></Image>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        <section className="p-5 bg-dark" id="messaging" style={{ borderBottom: "2px solid green"}}>
          <div className="container text-light">
            <Row>
              <Col md={6} sm={12} lg={6}>
                <div
                  className=""
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <p className="text-muted mb-0 pt-0">
                    Promoters / Marketers
                  </p>
                  <h1 className="display-3 fw-bolder text-light mb-2 mt-0 pt-0">
                    Whatsapp & SMS Bulk <span style={{color: "#8c5eff"}}>Messaging</span> Service
                  </h1>
                  <p className="lead text-light">
                    Access Affordable Messaging 🏆 
                  </p>
                  

                  <div className="mt-3">
                    <ListGroup variant="dark">
                      <ListGroupItem action variant="dark">
                        Create Phonebooks for different campaigns
                      </ListGroupItem>
                      <ListGroupItem action variant="dark">
                        Broadcast Whatsapp Messages
                      </ListGroupItem>
                      <ListGroupItem action variant="dark">
                        Broadcast Bulk SMS 
                      </ListGroupItem>
                      <ListGroupItem action variant="dark">
                        Create your own DND Routes
                      </ListGroupItem>
                    </ListGroup>
                  </div>
                </div>
              </Col>
              <Col md={6} sm={12} lg={6}>
                <div style={{ margin: "0px" }}>
                  <Image
                    src={require("../assets/images/dell.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    title="Happy Hour"
                  ></Image>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </div>
      <AppFooter />
    </Fragment>
  );
}

export default ProductFeature;
