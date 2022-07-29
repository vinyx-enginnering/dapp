import React, { useState, useEffect } from "react";
import { Form, Button, Modal, ListGroup, ListGroupItem } from "react-bootstrap";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { fetchDataPlans, purchaseDataPlan } from "../actions/transaction";

function DataBundle() {
  const [selectedNetwork, setSelectedNetwork] = useState();
  const [selectedPlan, setSelectedPlan] = useState({});
  const [phone_number, setPhoneNumber] = useState("");
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getDataPlans = useSelector((state) => state.getDataPlans);
  const { loading: plans_loading, error: plans_error, plans } = getDataPlans;

  const purchasePlan = useSelector((state) => state.purchasePlan);
  const { loading, error, transaction } = purchasePlan;

  const dataPlanOptions = [
    { value: { amount: 200, size: "100gb" }, label: "MTN 100GB" },
    { value: "airtel", label: "MTN 200GB" },
    { value: "glo", label: "MTN 300GB" },
    { value: "etisalat", label: "MTN 500GB" },
  ];

  const networkOptions = [
    { value: "MTN", label: "MTN" },
    { value: "Airtel", label: "Airtel" },
    { value: "Glo", label: "Glo" },
    { value: "9mobile", label: "9Mobile" },
  ];

  // useEffect(() => {
  //   dispatch(fetchDataPlans(selectedNetwork));
  // }, []);

  const submitSelectedNetwork = (e) => {
    setSelectedNetwork(e.value);

    console.log(selectedNetwork, e.value);
    if (e.value) {
      dispatch(fetchDataPlans(e.value));
    }

    console.log(selectedNetwork);
  };

  const submitSelectedPlan = (e) => setSelectedPlan(e.value);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(selectedNetwork);
    if (selectedPlan === {} || phone_number === "" || selectedNetwork === "") {
      return alert("Kindly fill in all fields");
    } else {
      dispatch(purchaseDataPlan(phone_number, selectedNetwork, selectedPlan));
      handleShow(true);
      setPhoneNumber("");
    }

    
  };

  // loop over the subjects list from redux and set to options
  let options;

  if (plans && plans.data) {
    options = plans.data.map((option) => ({
      value: option,
      label: `${option.label} ${option.validity}days (${option.currency} ${option.price})`,
      _id: option._id,
    }));
  }

  return (
    <div>
      <p className="lead">Sell Instant Data Bundle</p>
      
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
            type the number you want to credit without country code +234
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Select Network</Form.Label>
          <Select options={networkOptions} onChange={submitSelectedNetwork} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Select Data Plan</Form.Label>
          <Select options={options} onChange={submitSelectedPlan} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Pay & Send Data
        </Button>

        {plans_loading && <Loader />}
        {plans_error && <Message variant="error">{plans_error}</Message>}
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
            <p className="lead mb-4 p-2 bg-danger text-light">
              {error.includes("Insufficient Balance")
                ? "Somethings went wrong, contact help centre"
                : error}
            </p>
          )}
          {transaction && (
            <p className="lead mb-4 p-2 bg-success text-light">
              Your Data Purchase is complete
            </p>
          )}

          {error ? (
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
                  <span style={{ color: "#8c5eff" }}>Cashback</span> 0.00
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

export default DataBundle;
