import React, { Fragment, useState, useEffect } from "react";
import { FaMailBulk } from "react-icons/fa";
import { Form, Button, Modal, ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/Loader";
import { sendBulkMessage } from "../actions/bulksms";
import Select from "react-select";
import { getPhonebooks } from "../actions/phonebook";

function BulkSms() {
  const [message, setMessage] = useState("");
  const [sender, setSender] = useState("");
  const [numbers, setNumbers] = useState("");
  const [show, setShow] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState("");

  const channelOptions = [
    { value: "generic", label: "Generic" },
    { value: "dnd", label: "DND" },
  ];

  const submitSelectedChannel = (e) => setSelectedChannel(e.value);
  const submitSelectedPhonebook = (e) => setNumbers(e.value);

  const dispatch = useDispatch();

  const sendBulkSms = useSelector((state) => state.sendBulkSms);
  const { loading, error, transaction } = sendBulkSms;

  const fetchPhonebooks = useSelector((state) => state.fetchPhonebooks);
  const { loading: get_loading, error: get_error, contacts } = fetchPhonebooks;

  const handleClose = () => setShow(false);

  // fetch the phonebooks when page loads
  useEffect(() => {
    dispatch(getPhonebooks());
  }, [0]);

  const submitHandler = (e) => {
    e.preventDefault();
    if(selectedChannel === "" || sender === "" || message === "" || numbers === "") {
      return alert("Kindly fill & select all fields")
    } else {
      dispatch(sendBulkMessage(selectedChannel, sender, message, numbers));
      setShow(true);
    }
   
  };

  let options;
  if (contacts) {
    options = contacts.map((option) => ({
      value: option.numbers,
      label: option.title,
      _id: option._id,
    }));
  }

  return (
    <Fragment>
      <p className="lead">
        Send Bulk Message (SMS) <FaMailBulk color="#8c5eff" />{" "}
      </p>
      
      <hr />
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Select PhoneBook</Form.Label>
          <Select options={options} onChange={submitSelectedPhonebook} />
          <Form.Text className="text-muted" style={{ color: "#8c5eff" }}>
            Select the phonebook to send messages to{" "}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSender">
          <Form.Label>Sender ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter sender ID "
            value={sender}
            onChange={(e) => setSender(e.target.value)}
          />
          <Form.Text className="text-muted" style={{ color: "#8c5eff" }}>
            Enter sender ID,{" "}
            <span className="text-success">i.e Tamack Advert</span>
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Select Channel</Form.Label>
          <Select options={channelOptions} onChange={submitSelectedChannel} />
          <Form.Text className="text-muted mt-3" style={{ color: "#8c5eff" }}>
            <ListGroup>
              <ListGroupItem variant="warning">
                Generic are for regular messages
              </ListGroupItem>
              <ListGroupItem variant="info">
                DND are for strict number set to Do Not Disturb
              </ListGroupItem>
            </ListGroup>
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="type your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send Message's
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
            <p className="lead mb-2 bg-danger text-light p-2">
              Error {console.log(error)}
            </p>
          )}
          {transaction && (
            <p className="lead mb-4 p-2 bg-success text-light">
              Your Message's are busy sending...
            </p>
          )}

          {error ? (
            ""
          ) : (
            <div>
              <p style={{ color: "#8c5eff" }}>Details</p>
              <ListGroup>
                <ListGroupItem>
                  <span style={{ color: "#8c5eff" }}>Transaction Amount</span> N
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
    </Fragment>
  );
}

export default BulkSms;
