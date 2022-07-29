import React, { useState, useEffect } from "react";
import { Form, Button, Modal, ListGroup, ListGroupItem } from "react-bootstrap";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { purchaseBulk } from "../actions/transaction";

function PurchaseBulkPins() {
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [amount, setAmount] = useState("");
  const [quantity, setQuantity] = useState("");
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const purchaseBulkPin = useSelector((state) => state.purchaseBulkPin);
  const { loading, error, transaction } = purchaseBulkPin;

  const networkOptions = [
    { value: "MTN", label: "MTN" },
    { value: "Airtel", label: "Airtel" },
    { value: "Glo", label: "Glo" },
    { value: "9mobile", label: "9Mobile" },
  ];

  const amountOptions = [
    { value: "100", label: "100" },
    { value: "200", label: "200" },
    { value: "500", label: "500" },
  ];
  const quantityOptions = [
    { value: "50", label: "50" },
    { value: "100", label: "100" },
    { value: "200", label: "200" },
    { value: "500", label: "500" },
  ];

  const submitSelectedNetwork = (e) => setSelectedNetwork(e.value);
  const submitSelectedAmount = (e) => setAmount(e.value);
  const submitSelectedQuantity = (e) => setQuantity(e.value);

  const submitHandler = (e) => {
    e.preventDefault();

    if (amount === "" || quantity === "" || selectedNetwork === "") {
      return alert("Kindly fill in all fields");
    } else {
      dispatch(purchaseBulk(selectedNetwork, amount, quantity));
      setShow(true);
    }

    setAmount("");
    setQuantity("");
    setSelectedNetwork("");
  };

  return (
    <div>
      <p className="lead">Purchase Bulk E-Pins</p>
      <hr />
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Select Network</Form.Label>
          <Select options={networkOptions} onChange={submitSelectedNetwork} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Select Denomination</Form.Label>
          <Select options={amountOptions} onChange={submitSelectedAmount} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Select Quantity</Form.Label>
          <Select options={quantityOptions} onChange={submitSelectedQuantity} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Pay & Order
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
            <p className="lead mb-4 p-2 text-light" style={{backgroundColor: "#8c5eff"}}>
              Your Epins Order Has been placed, copy your order number and send us a message via whatsapp to confirm and send your order
            </p>
          )}

          {transaction && (
            <ListGroup>
              <ListGroupItem>Order ID: {transaction._id}</ListGroupItem>
              
            </ListGroup>
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

export default PurchaseBulkPins;
