import React, { useEffect, Fragment } from "react";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/Loader.js";
import Message from "../components/Message.js";
import { getTransactionAction } from "../actions/transaction.js";
import DateFormatter from "react-date-formatter";

function TransactionDetails() {
  const dispatch = useDispatch();

  const getTransactions = useSelector((state) => state.getTransactions);
  const { loading, error, transactions } = getTransactions;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      dispatch(getTransactionAction(100));
    }
  }, []);

  return (
    <div className="container mt-5 mb-5 bg-light py-5">
       <h3 className="" style={{ color: "#8c5eff" }}>
        All Transaction Records
      </h3>
      <p className="lead">List of all transactions on your wallet</p>
      <hr />
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
                <td>
                  {transaction.kind == "debit" ? (
                    <span className="text-danger">-{transaction.amount}</span>
                  ) : (
                    <span className="text-success">+{transaction.amount}</span>
                  )}
                </td>
                <td>{transaction.txn_status}</td>
              </tr>
            ))}

          
        </tbody>
      </Table>
    </div>
  );
}

export default TransactionDetails;
