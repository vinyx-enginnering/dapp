import React, { useState, useEffect } from "react";
import { Form, Button, Alert, Table } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useSelector, useDispatch } from "react-redux";
import {
  makePhonebook,
  getPhonebooks,
  deletePhonebook,
} from "../actions/phonebook";
import DateFormatter from "react-date-formatter";
import { IoMdRefreshCircle } from "react-icons/io";

function PhoneBook() {
  const [Title, setTitle] = useState("");
  const [Numbers, setNumbers] = useState("");

  const dispatch = useDispatch();

  const createPhonebook = useSelector((state) => state.createPhonebook);
  const { loading, error, contact } = createPhonebook;

  const fetchPhonebooks = useSelector((state) => state.fetchPhonebooks);
  const { loading: get_loading, error: get_error, contacts } = fetchPhonebooks;

  const removePhonebook = useSelector((state) => state.removePhonebook);
  const {
    loading: removal_loading,
    error: removal_error,
    contact: removed,
  } = removePhonebook;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Title === "" || Numbers === "") {
      return alert("Fill in all fields");
    } else {
      dispatch(makePhonebook(Title, Numbers));
    }

    setTitle("");
    setNumbers("");
  };

  // fetch the phonebooks when page loads
  useEffect(() => {
    dispatch(getPhonebooks());
  }, [0]);

  const dismissPhonebook = (id) => {
    dispatch(deletePhonebook(id));
  };

  const refreshList = () => {
    dispatch(getPhonebooks());
  };

  return (
    <div className="container mt-5 bg-light py-5">
      <p className="lead" style={{ color: "#8c5eff" }}>
        Create New Phonebook
      </p>
      {contact && <Message variant="success">PhoneBook saved</Message>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phonebook Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name for this phonebook"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Text className="text-muted" style={{ color: "#8c5eff" }}>
            Try to name your phonebook uniquely
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Numbers</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="type your message here"
            value={Numbers}
            onChange={(e) => setNumbers(e.target.value)}
          />
        </Form.Group>

        {loading && <Loader />}
        {error && <p className="lead p-2 bg-danger text-light">{error}</p>}

        <Button variant="primary" type="submit">
          Upload
        </Button>
      </Form>

      <div className="mt-5">
        <p className="lead" style={{ color: "#8c5eff" }}>
          Phonebook Records{" "}
          <Button onClick={refreshList}>
          <IoMdRefreshCircle size={25} /> Refresh List {" "}
          </Button>
        </p>
        {get_loading && <Loader />}
        {removal_loading && <Loader />}
        {get_error && (
          <p className="lead p-2 bg-danger text-light">{get_error}</p>
        )}
        {removed && <Message variant="success">PhoneBook Deleted</Message>}
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Phonebook Title</th>
              <th>No. of Contacts</th>
              <th>Created On</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts &&
              contacts.map((contact) => (
                <tr key={contact._id}>
                  <td>{contact.title}</td>
                  <td>{contact.numbers.split(",").length}</td>
                  <td>{DateFormatter(contact.createdAt).shortDate()}</td>
                  <td>
                    <a
                      className="btn btn-danger btn-sm"
                      onClick={() => dismissPhonebook(contact._id)}
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default PhoneBook;
