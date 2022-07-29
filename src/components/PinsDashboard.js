import React, {useEffect} from "react";
import {
  Card,
  Button,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getall9mobile, getallmtn, getallairtel, getallglo } from "../actions/card";

function PinsDashboard() {
  const dispatch = useDispatch();

  const getmtn = useSelector((state) => state.getmtn);
  const { loading: mtn_loadig, pins: mtn_pins } = getmtn;

  const getairtel = useSelector((state) => state.getairtel);
  const { loading: airtel_loadig, pins: airtel_pins } = getairtel;

  const getglo = useSelector((state) => state.getglo);
  const { loading: glo_loadig, pins: glo_pins } = getglo;

  const get9mobile = useSelector((state) => state.get9mobile);
  const { loading: mobile_loadig, pins: mobile_pins } = get9mobile;

  useEffect(() => {
    dispatch(getallmtn())
    dispatch(getallairtel())
    dispatch(getallglo())
    dispatch(getall9mobile())
  }, []);

  return (
    <Row>
      <Col sm={6} md={3} lg={3}>
        <Card>
          <Card.Body style={{ padding: "9px" }}>
            <Row>
              <Col sm={3} md={3} lg={3}>
                {" "}
                <img
                  src={require("../assets/images/airtel2.png")}
                  style={{ width: "50px", height: "50px" }}
                  alt="logo"
                />
              </Col>
              <Col sm={9} md={9} lg={9}>
                <p className="lead m-0 p-0">Available</p>
                <p className="lead m-0 p-0" style={{ color: "#8c5eff" }}>
                  {airtel_pins && airtel_pins.length} units
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={3} lg={3}>
        <Card>
          <Card.Body style={{ padding: "9px" }}>
            <Row>
              <Col sm={3} md={3} lg={3}>
                {" "}
                <img
                  src={require("../assets/images/mtn2.png")}
                  style={{ width: "50px", height: "50px" }}
                  alt="logo"
                />
              </Col>
              <Col sm={9} md={9} lg={9}>
                <p className="lead m-0 p-0">Available</p>
                <p className="lead m-0 p-0" style={{ color: "#8c5eff" }}>
                {mtn_pins && mtn_pins.length} units
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={3} lg={3}>
        <Card>
          <Card.Body style={{ padding: "9px" }}>
            <Row>
              <Col sm={3} md={3} lg={3}>
                {" "}
                <img
                  src={require("../assets/images/glo2.png")}
                  style={{ width: "50px", height: "50px" }}
                  alt="logo"
                />
              </Col>
              <Col sm={9} md={9} lg={9}>
                <p className="lead m-0 p-0">Available</p>
                <p className="lead m-0 p-0" style={{ color: "#8c5eff" }}>
                {glo_pins && glo_pins.length} units
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={3} lg={3}>
        <Card>
          <Card.Body style={{ padding: "9px" }}>
            <Row>
              <Col sm={3} md={3} lg={3}>
                {" "}
                <img
                  src={require("../assets/images/9mobile2.png")}
                  style={{ width: "50px", height: "50px" }}
                  alt="logo"
                />
              </Col>
              <Col sm={9} md={9} lg={9}>
                <p className="lead m-0 p-0">Available</p>
                <p className="lead m-0 p-0" style={{ color: "#8c5eff" }}>
                {mobile_pins && mobile_pins.length} units
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default PinsDashboard;
