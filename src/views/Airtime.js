import React, { useState, useEffect } from "react";
import { Form, Button, Modal, ListGroup, ListGroupItem } from "react-bootstrap";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { airtimeVTU } from "../actions/transaction";

function Airtime() {
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [amount, setAmount] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const purchaseVTU = useSelector((state) => state.purchaseVTU);
  const { loading, error, transaction } = purchaseVTU;

  const networkOptions = [
    { value: "MTN", label: "MTN" },
    { value: "Airtel", label: "Airtel" },
    { value: "Glo", label: "Glo" },
    { value: "9mobile", label: "9Mobile" },
  ];

  const submitSelectedNetwork = (e) => setSelectedNetwork(e.value);

  const submitHandler = (e) => {
    e.preventDefault();

    if (amount === "" || phone_number === "" || selectedNetwork === "") {
      return alert("Kindly fill in all fields");
    } else {
      dispatch(airtimeVTU(selectedNetwork, amount, phone_number));
      setShow(true);
    }

    setAmount("");
    setPhoneNumber("");
    setSelectedNetwork({});
  };

  return (
    <div>
      <p className="lead">Sell Airtime VTU</p>
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
            type the number you want to credit without, +234
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

export default Airtime;
