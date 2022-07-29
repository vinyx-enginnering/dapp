import React, { useState, useEffect } from "react";
import { Form, Button, Modal, ListGroup, ListGroupItem } from "react-bootstrap";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { vt_data, vt_query_dataplans } from "../actions/topup_transaction";

function VTPassData() {
  const [selectedNetwork, setSelectedNetwork] = useState();
  const [selectedPlan, setSelectedPlan] = useState();
  const [phone_number, setPhoneNumber] = useState("");
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const queryVTDataPlans = useSelector((state) => state.queryVTDataPlans);
  const {
    loading: plans_loading,
    error: plans_error,
    plans,
  } = queryVTDataPlans;

  const VTData = useSelector((state) => state.VTData);
  const { loading, error, transaction } = VTData;

  const networkOptions = [
    { value: "mtn", label: "MTN" },
    { value: "airtel", label: "Airtel" },
    { value: "glo", label: "Glo" },
    { value: "etisalat", label: "9Mobile" },
  ];

  // useEffect(() => {
  //   dispatch(fetchDataPlans(selectedNetwork));
  // }, []);

  const submitSelectedNetwork = (e) => {
    setSelectedNetwork(e.value);

    if (e.value) {
      dispatch(vt_query_dataplans(e.value));
    }

  };

  const submitSelectedPlan = (e) => setSelectedPlan(e.value);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(selectedNetwork);
    if (phone_number === "" || selectedNetwork === "") {
      return alert("Kindly fill in all fields");
    } else {
      dispatch(vt_data({
        serviceId: selectedNetwork,
        billersCode: "07017647364",
        varation_code: selectedPlan.variation_code,
        amount: selectedPlan.variation_amount,
        phone: phone_number,
      }));
      handleShow(true);
      setPhoneNumber("");
    }
  };

  // loop over the subjects list from redux and set to options
  let options;

  if (plans) {
    options = plans.map((option) => ({
      value: option,
      label: `${option.name} `,
    }));
  }

  return (
    <div className="container py-5 bg-light">
      <p className="h3" style={{color: "#8c5eff"}}>Sell Data </p>

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
              {error}
            </p>
          )}

          {transaction && (
            <p className="lead mb-4 p-2 bg-success text-light">
              Your Transaction is complete
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
                  <span style={{ color: "#8c5eff" }}>Cashback</span> {transaction && transaction.cashback}
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

export default VTPassData;
