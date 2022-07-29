import React, { useState, useEffect } from "react";
import { Form, Button, Modal, ListGroup, ListGroupItem } from "react-bootstrap";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { vt_airtime } from "../actions/topup_transaction";

function VTPassAirtime() {
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [amount, setAmount] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const VTAirtime = useSelector((state) => state.VTAirtime);
  const { loading, error, transaction } = VTAirtime;

  const networkOptions = [
    { value: "mtn", label: "MTN" },
    { value: "airtel", label: "Airtel" },
    { value: "glo", label: "Glo" },
    { value: "etisalat", label: "9Mobile" },
  ];

  const submitSelectedNetwork = (e) => setSelectedNetwork(e.value);

  const submitHandler = (e) => {
    e.preventDefault();

    if (amount === "" || phone_number === "" || selectedNetwork === "") {
      return alert("Kindly fill in all fields");
    } else {
      dispatch(vt_airtime(selectedNetwork, amount, phone_number));
      setShow(true);
    }

    setAmount("");
    setPhoneNumber("");
    setSelectedNetwork({});
  };

  return (
    <div className="bg-light py-5 container">
      <p className="h3" style={{color: "#8c5eff"}}>Sell Airtime </p>
      <hr />
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Mobile Number"
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Form.Text className="text-muted">
            Let your number follow this format: 080.. 081.. 070.. etc
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Select Network</Form.Label>
          <Select options={networkOptions} onChange={submitSelectedNetwork} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Airtime Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Pay & Send Airtime
        </Button>
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
          {loading && <Loader />}
          {error && (
            <p className="lead mb-2 bg-danger text-light p-2">{error}</p>
          )}
          {transaction && (
            <p className="lead mb-4 p-2 bg-success text-light">
              Your Airtime Purchase is complete
            </p>
          )}

          {error ? (
            ""
          ) : (
            <div>
              <p style={{ color: "#8c5eff" }}>Details</p>
              <ListGroup>
                <ListGroupItem>
                  <span style={{ color: "#8c5eff" }}>Airtime Amount</span> N{" "}
                  {transaction && transaction.amount}
                </ListGroupItem>

                <ListGroupItem>
                  <span style={{ color: "#8c5eff" }}>Cashback</span> N{" "}
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

export default VTPassAirtime;
