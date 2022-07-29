import React, { Fragment, useEffect, useRef, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCard } from "../actions/card";
import DateFormatter from "react-date-formatter";
import ReactToPrint from "react-to-print";
import { get_user } from "../actions/user.js";

function Etisalat500Voucher() {
  const dispatch = useDispatch();

  const componentRef = useRef();

  useEffect(() => {
    dispatch(getCard("9mobile"));
  }, []);

  const getVoucher = useSelector((state) => state.getVoucher);
  const { loading, error, pins } = getVoucher;

  const getUser = useSelector((state) => state.getUser);
  const { user } = getUser;

  useMemo(() => dispatch(get_user()), [0]);

  return (
    <Fragment>
      <ReactToPrint
        trigger={() => (
          <button className="btn btn-md mx-4 my-2 mt-1 btn-dark">
            Print this out!
          </button>
        )}
        content={() => componentRef.current}
      />
      <div
        className="p-2"
        style={{
          display: "grid",
          gridTemplateColumns: "350px 350px 350px",
          backgroundColor: "white",
          marginBottom: "4px",
        }}
        ref={componentRef}
      >
        {error && (
          <p variant="danger" className="lead">
            {error}
          </p>
        )}

        {pins &&
          pins.vouchers.map((pin) => (
            <div
              style={{
                height: "120px",
                width: "350px",
                border: "2px dotted black",
                lineHeight: "18px",
                margin: "2px",
              }}
              key={pin._id}
            >
              <div style={{ height: "120px" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <h4
                    className="text-light px-1 pt-1"
                    style={{
                      width: "50%",
                      borderBottomRightRadius: "20px",
                      backgroundColor: "green",
                    }}
                  >
                    {user && user ? user.company_name : "Double Link"}
                  </h4>
                  <h4
                    className=""
                    style={{
                      width: "50%",
                      textAlign: "right",
                      paddingRight: "5px",
                    }}
                  >
                    N500
                  </h4>
                </div>
                <div style={{ display: "flex" }}>
                  <div className="px-1" style={{ width: "90%" }}>
                    <p className="p-0 m-0">Serial: {pin.serial_number}</p>
                    <p
                      className="p-0 m-0 lead"
                      style={{ fontWeight: "900", fontSize: "1.3rem" }}
                    >
                      PIN: {pin.pin}
                    </p>
                    <p className="p-0 m-0" style={{ margin: "-2px" }}>
                      Ref No: {pin._id}
                    </p>
                    <h4
                      className="p-0 m-0"
                      style={{ fontSize: "1.2rem", color: "#034519" }}
                    >
                      9mobile{" "}
                      <small style={{ fontSize: "1rem" }}>
                        {DateFormatter(pin.createdAt).shortDate()}
                      </small>
                    </h4>
                  </div>
                  <div
                    style={{
                      width: "20%",
                      textAlign: "right",
                      paddingRight: "5px",
                    }}
                  >
                    <img
                      src={require("../assets/images/9mobile.png")}
                      style={{ width: "50px", height: "50px" }}
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </Fragment>
  );
}

export default Etisalat500Voucher;
