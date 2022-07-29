import React, { useState, useEffect } from "react";
import { Container, Accordion, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { user_edit } from "../actions/user.js";
import Loader from "../components/Loader.js";

function EditProfile() {
  const [phone_number, setPhoneNumber] = useState("");
  const [company_name, setCompanyName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userEdit = useSelector((state) => state.userEdit);
  const { loading, error, edit_response } = userEdit;

  const submitHandler = (e) => {
    e.preventDefault();

    if (company_name === "" || phone_number === "") {
      return alert("Kindly input phone number and voucher display name");
    } else {
      dispatch(user_edit(company_name, phone_number));
    }
  };

  return (
    <div className="bg-light py-1 pb-5">
      <Container className="pb-5">
        <h3 className="mt-5" style={{ color: "#8c5eff" }}>
          Settings
        </h3>
        
        <p className="lead">Change your profile settings </p>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Edit Profile</Accordion.Header>
            <Accordion.Body>
              Change voucher display name and phone number
              <hr />
              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Change Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Valid Phone Number"
                    value={phone_number}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <Form.Text>
                    This number will be used to contact you, when you order
                    epins and more...
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-5" controlId="formBasicEmail">
                  <Form.Label>Change Voucher Display Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Voucher display name"
                    value={company_name}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                  <Form.Text>
                    This is the name that appears on your vouchers
                  </Form.Text>
                </Form.Group>

                <div className="d-grid">
                  <Button className="btn-primary" type="submit">
                    Save Changes
                  </Button>
                </div>
                {loading && <Loader />}
                {error && <p className="p-2 mt-2 bg-danger text-light">{error}</p>}
                {edit_response && (
                  <p
                    className="p-2 mt-2 text-light"
                    style={{ backgroundColor: "#8c5eff" }}
                  >
                    Congrat! Successfully changed...
                  </p>
                )}
              </Form>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}

export default EditProfile;
