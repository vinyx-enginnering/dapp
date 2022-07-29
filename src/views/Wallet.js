import React, { Fragment, useEffect } from "react";
import { Col, Row, Card, Button, Container } from "react-bootstrap";
import TransactionDetails from "./TransactionDetails";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/Loader.js";
import Message from "../components/Message.js";
import { getWalletAction } from "../actions/wallet.js";
import TransactionsChart from "../screens/TransactionsChart.js"

const Wallet = () => {
  const dispatch = useDispatch();

  const getWallet = useSelector((state) => state.getWallet);
  const { loading, error, wallet } = getWallet;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      dispatch(getWalletAction());
    }
  }, []);

  return (
    <Fragment>
      <Row>
        <Col>
          <Card bg="dark" text="light">
            <Card.Body>
              <Card.Title>
                Start Your journey to becoming a Recharge Card Dealer
              </Card.Title>
              <Card.Text>
                This guide will walk you through the in's and out's of starting
                a business of recharge card productions and distribution, how to
                scale and make more...
              </Card.Text>
              <Button variant="light">Learn How </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        {error && <Message variant="danger">{error.message || "Kindly log back in"}</Message>}
        {loading && <Loader />}

        <p className="lead mt-4 mb-1" style={{ color: "#8c5eff" }}>
          Wallet Summary{" "}
          <a href="/fund-wallet" className="btn btn-dark">
            Fund Wallet{" "}
          </a>
        </p>

        <Col>
          <div className="border-end border-primary">
            <p className="lead mb-0">Balance</p>
            <h3>₦ {wallet && wallet.balance}</h3>
            <small>This is your transactions cash</small>
          </div>
        </Col>
        <Col>
          <div className=" border-end border-primary">
            <p className="lead mb-0">Cash back</p>
            <h3>₦ {wallet && wallet.cashback}</h3>
            <small>This is both your interest and cashback</small>
          </div>
        </Col>
        <Col>
          <div className="">
            <p className="lead mb-0">Total</p>
            <h3>₦ {wallet && wallet.cashback + wallet.balance}</h3>
            <small>This is your total earning</small>
          </div>
        </Col>
      </Row>
      <hr />
      <div className="mt-3">
        <p className="lead" style={{ color: "#8c5eff" }}>
          Transaction Chart
        </p>
        <Container><TransactionsChart /></Container>
        
      </div>
    </Fragment>
  );
};

export default Wallet;
