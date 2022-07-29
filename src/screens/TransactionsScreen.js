import React, { Fragment, useEffect } from 'react';
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/Loader.js";
import Message from "../components/Message.js";
import { getTransactionAction } from "../actions/transaction.js";
import DateFormatter from 'react-date-formatter';

function TransactionsScreen() {
  const dispatch = useDispatch();

  const getTransactions = useSelector((state) => state.getTransactions);
  const { loading, error, transactions } = getTransactions;

  useEffect(() => {
    dispatch(getTransactionAction(20));
  }, []);

  return (
    <Fragment>
      <h3 className='display-6'>Showing List of All Transactions on your wallet</h3>
        <hr />
        <p className="lead" style={{ color: "#8c5eff" }}>
          Most Recent Transactions Log
        </p>

        {error && <Message variant="error">{error}</Message>}
        {loading && <Loader />}

        
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Naration</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions &&
            transactions.map((transaction) => (
              <tr key={transaction._id}>
                <td>{DateFormatter(transaction.createdAt).shortDate()}</td>
                <td>{transaction.narration}</td>
                <td>{transaction.kind == "debit" ? <span className="text-danger">-{transaction.amount}</span> : <span className="text-success">+{transaction.amount}</span>}</td>
                <td>{transaction.txn_status}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Fragment>
  )
}

export default TransactionsScreen;