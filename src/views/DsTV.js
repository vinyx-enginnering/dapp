import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  FormGroup,
  Row,
  Col,
  Modal,
  ListGroup,
  ListGroupItem,
  Image,
} from "react-bootstrap";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import {
  verify_dstv,
  dstv_plans,
  subscribe_dstv,
} from "../actions/tv_transaction.js";
import Loader from "../components/Loader";
import DateFormatter from "react-date-formatter";

function DsTV() {
  const [number, setNumber] = useState("");
  const [selectedPlan, setSelectedPlan] = useState();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const verifyDstv = useSelector((state) => state.verifyDstv);
  const { loading, error, verification } = verifyDstv;

  const DstvPlans = useSelector((state) => state.DstvPlans);
  const { loading: plans_loading, error: plans_error, plans } = DstvPlans;

  const subscribeDstv = useSelector((state) => state.subscribeDstv);
  const { loading: sub_loading, error: sub_error, transaction } = subscribeDstv;

  const verify_dstv_web = () => {
    dispatch(verify_dstv(number));
  };

  useEffect(() => {
    dispatch(dstv_plans());
  }, [verification]);

  // gotv plans
  let options;

  if (plans) {
    options = plans.map((option) => ({
      value: option,
      label: `${option.name})`,
    }));
  }

  const submitSelectedPlan = (e) => setSelectedPlan(e.value);

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(selectedPlan);
    // billersCode, varation_code, amount, phone
    dispatch(
      subscribe_dstv({
        billersCode: number,
        varation_code: selectedPlan.variation_code,
        amount: selectedPlan.variation_amount,
        phone: verification.content.Customer_Number,
      })
    );

    handleShow(true);
  };

  return (
    <div>
      <p className="lead">Purchase DsTV Subscription</p>
      <p className="text-muted">
        Note that the following bouquets (DStv Access, DStv Family) have been
        removed by DSTV and replaced with (DStv Padi, DStv Yanga and DStv
        Confam). The prices of all the bouquets have also been adjusted by DStv
        to reflect the VAT rate adjustment.
      </p>
      <hr />
      <Image
        src={require("../assets/images/dstv.jpg")}
        style={{
          width: "100px",
          height: "100px",
          objectFit: "cover",
        }}
        title="Gotv"
      ></Image>
      <Form onSubmit={submitHandler}>
        <FormGroup>
          <Form.Label className="lead">Smart Card Number</Form.Label>
          <Row>
            <Col sm={12} md={10} lg={10}>
              <Form.Control
                type="text"
                placeholder="Enter Smart Card Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </Col>
            <Col sm={12} md={2} lg={2}>
              <div className="d-grid">
                <Button
                  variant="primary"
                  className=""
                  onClick={verify_dstv_web}
                >
                  Verify
                </Button>
              </div>
            </Col>
          </Row>
          {loading && (
            <p className="bg-warning text-light p-2 mt-2">
              Verifying Smart Card Number...
            </p>
          )}
          {error && <p className="bg-danger text-light p-2 mt-2">{error}</p>}
          {verification && (
            <div className=" p-2 m-1" style={{ backgroundColor: "#8c5eff" }}>
              <p className="lead text-light">Verication Complete</p>
              <p className="lead text-light">
                Customer Name: {verification.content.Customer_Name}
              </p>
              <p className="lead text-light">
                Customer Number: {verification.content.Customer_Number}
              </p>
              <p className="lead text-light">
                GoTV Status: {verification.content.Status}
              </p>
            </div>
          )}
        </FormGroup>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Select Bouquet</Form.Label>
          <Select options={options} onChange={submitSelectedPlan} />
        </Form.Group>

        <div className="d-grid">
          <Button className="btn-primary" type="submit">
            Continue
          </Button>
        </div>
      </Form>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Transaction Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {sub_loading && <Loader />}
          {sub_error && (
            <p className="lead mb-4 p-2 bg-danger text-light">{sub_error}</p>
          )}
          {transaction && (
            <p className="lead mb-4 p-2 bg-success text-light">
              Your Transaction is complete
            </p>
          )}

          {sub_error ? (
            ""
          ) : (
            <div>
              <p style={{ color: "#8c5eff" }}>Details</p>
              <ListGroup>
                <ListGroupItem>
                  <span style={{ color: "#8c5eff" }}>Transaction Amount</span>{" "}
                  {transaction && transaction.amount}
                </ListGroupItem>

                <ListGroupItem>
                  <span style={{ color: "#8c5eff" }}>Cashback</span>{" "}
                  {transaction && transaction.cashback}
                </ListGroupItem>

                <ListGroupItem>
                  <span style={{ color: "#8c5eff" }}>Naration</span>{" "}
                  {transaction && transaction.narration}
                </ListGroupItem>

                <ListGroupItem>
                  <span style={{ color: "#8c5eff" }}>Reference</span>{" "}
                  {transaction && transaction.txn_ref}
                </ListGroupItem>

                <ListGroupItem>
                  <span style={{ color: "#8c5eff" }}>Status</span>{" "}
                  {transaction && transaction.txn_status}
                </ListGroupItem>

                <ListGroupItem>
                  <span style={{ color: "#8c5eff" }}>Date</span>{" "}
                  {transaction &&
                    DateFormatter(transaction.createdAt).shortDate()}
                </ListGroupItem>
              </ListGroup>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Alright
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DsTV;
