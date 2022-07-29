import React, { useState, useEffect } from "react";
import { Container, Accordion, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {fundCustomerWallet} from "../actions/wallet.js";
import Message from "../components/Message.js";

function FundWalletScreen() {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(0);
  const [customer, setCustomer] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const fundedWallet = useSelector((state) => state.fundWallet);
  const {loading: wallet_loading, error: wallet_error, transaction} = fundedWallet;

  

  const submitHandler = (e) => {
    e.preventDefault();

    var merchantCode = "MX59529";
    var payItemId = "Default_Payable_MX59529";

    var transRef = randomReference();
    var paymentRequest = {
      merchant_code: merchantCode,
      pay_item_id: payItemId,
      txn_ref: transRef,
      amount: amount * 100,
      cust_id: userInfo && userInfo._id,
      currency: "566",
      site_redirect_url: window.location.origin,
      onComplete: paymentCallback,
      mode: "LIVE",
    };

    window.webpayCheckout(paymentRequest);
  };

  //generate a random transaction ref
  function randomReference() {
    var length = 10;
    var chars =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var result = "";
    for (var i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }

  //callback function that gets triggered on payment success or failure
  function paymentCallback(response) {
    if(response != null) {
        dispatch(fundCustomerWallet(amount, response.desc, response.txnref));
        console.log(response);
    }
  }

  return (
    <Container className="bg-light py-1">
      <h3 className="mt-5" style={{ color: "#8c5eff" }}>
        Fund Your Wallet
      </h3>
      {transaction && <Message variant="success">{transaction.narration}</Message>}
      <p className="lead">Choose your payment option below</p>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Pay with InterSwitch</Accordion.Header>
          <Accordion.Body>
            This method of payment supports cards, transfers and other payment
            options - most flexible
            <hr />
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Customer</Form.Label>
                <Form.Control
                  type="text"
                  disabled
                  placeholder={userInfo && userInfo.fullname}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Customer Email</Form.Label>
                <Form.Control
                  type="email"
                  disabled
                  placeholder={userInfo && userInfo.email}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  Amount in <span style={{ color: "#8c5eff" }}>Naira</span>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Payment Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <Form.Text style={{ color: "#8c5eff" }}>
                  Pay minimum of 1,000 Naira
                </Form.Text>
              </Form.Group>

              <div className="d-grid">
                <input type="submit" className="btn btn-primary" placeholder="Pay Now"/>
              </div>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Pay with PayPal</Accordion.Header>
          <Accordion.Body>
            <p className="display-6">This Feature this coming in the next version</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default FundWalletScreen;
