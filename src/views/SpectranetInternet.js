import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  FormGroup,
  Modal,
  ListGroup,
  ListGroupItem,
  Image,
} from "react-bootstrap";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import {
  spectranet_plans,
  subscribe_spectranet,
} from "../actions/internet_transaction.js";
import Loader from "../components/Loader";
import DateFormatter from "react-date-formatter";

function SpectranetInternet() {
  const [phone, setNumber] = useState("");
  const [selectedPlan, setSelectedPlan] = useState();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const SpectranetPlans = useSelector((state) => state.SpectranetPlans);
  const { loading: plans_loading, error: plans_error, plans } = SpectranetPlans;

  const subscribeSpectranet = useSelector((state) => state.subscribeSpectranet);
  const {
    loading: sub_loading,
    error: sub_error,
    transaction,
  } = subscribeSpectranet;

  useEffect(() => {
    dispatch(spectranet_plans());
  }, [0]);

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

    dispatch(
      subscribe_spectranet({
        billersCode: phone,
        varation_code: selectedPlan.variation_code,
        amount: selectedPlan.variation_amount,
        phone: phone,
      })
    );

    handleShow(true);
  };

  return (
    <div className="bg-light py-5 container">
      <p className="h3" style={{ color: "#8c5eff" }}>
        Purchase Spectranet Internet
      </p>
      <p className="text-muted"></p>
      <hr />
      <Image
        src={require("../assets/images/spectranet.jpg")}
        style={{
          width: "100px",
          height: "100px",
          objectFit: "cover",
        }}
        title="Gotv"
      ></Image>
      <Form onSubmit={submitHandler}>
        <FormGroup>
          <Form.Label className="lead">Spectranet Number</Form.Label>

          <Form.Control
            type="text"
            placeholder="Enter Smile Phone Number"
            value={phone}
            onChange={(e) => setNumber(e.target.value)}
          />
        </FormGroup>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Select Type</Form.Label>
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

export default SpectranetInternet;
