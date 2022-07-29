import React, { Fragment, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { getTransactionAction } from "../actions/transaction.js";
import DateFormatter from "react-date-formatter";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/Loader.js";
import Message from "../components/Message.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const dispatch = useDispatch();

  const getTransactions = useSelector((state) => state.getTransactions);
  const { loading, error, transactions } = getTransactions;

  useEffect(() => {
    dispatch(getTransactionAction(20));
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Transaction Chart",
      },
    },
  };

  const data = {
    labels:
      transactions &&
      transactions.map((transaction) =>
        DateFormatter(transaction.createdAt).shortDate()
      ),
    datasets: [
      {
        label: "Expenses",
        data:
          transactions && transactions.map((transaction) => transaction.amount),
        borderColor: "#8C5EFF",
        backgroundColor: "black",
      },
    ],
  };

  return (
    <Fragment>
      {error && <Message variant="error">{error}</Message>}
      {loading && <Loader />}
      <Line options={options} data={data} />
    </Fragment>
  );
};

export default Chart;
