import React, { useEffect, useState, useRef, Fragment, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCard } from "../actions/card";
import ReactToPrint from "react-to-print";
import { get_user } from "../actions/user.js";
import DateFormatter from "react-date-formatter";
import "../App.css"

const ref = React.createRef();

function Airtel100Voucher() {
  const dispatch = useDispatch();

  const componentRef = useRef();

  useEffect(() => {
    dispatch(getCard("Airtel"));
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
        className="p-2 printer"
        id="printer"
        style={{
          display: "grid",
          gridTemplateColumns: "260px 260px 260px 260px",
          background: "white",
          pageBreakAfter: "avoid",
          pageBreakBefore: "avoid",

      
        }                                                                                                                }
        ref={componentRef}
   
      >
        {error && <p variant="danger">{error}</p>}

        {pins &&
          pins.vouchers.map((pin) => (
            <div
              style={{
                height: "94px",
                width: "260px",
                border: "2px solid black",
                lineHeight: "15px",
                marginTop: "2px",
                marginBottom: "2px",
                fontSize: "10px",
                padding: "2px",
              }}
              key={pin._id}
            >
              <div style={{ height: "90px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "20px",
                  }}
                >
                  <p
                    className="bg-danger text-light px-1 pt-1 lead"
                    style={{
                      width: "50%",
                      borderBottomRightRadius: "20px",
                      height: "22px",
                    }}
                  >
                    {user && user ? user.company_name : "Double Link"}
                  </p>
                  <h4
                    className=""
                    style={{
                      width: "50%",
                      textAlign: "right",
                      paddingRight: "5px",
                    }}
                  >
                    N100
                  </h4>
                </div>
                <div style={{ display: "flex" }}>
                  <div className="px-1 py-1" style={{ width: "90%" }}>
                    <p className="p-0 m-0">Serial: {pin.serial_number}</p>
                    <p
                      className="p-0 m-0 lead"
                      style={{ fontWeight: "900", fontSize: "1rem" }}
                    >
                      PIN: {pin.pin}
                    </p>
                    <p className="p-0 m-0" style={{ margin: "-2px" }}>
                      Ref No: {pin._id}
                    </p>
                    <p
                      className="p-0 m-0 text-danger"
                      style={{ fontSize: "13px" }}
                    >
                      Airtel{" "}
                      <span style={{ fontSize: "13px" }}>{DateFormatter(pin.createdAt).shortDate()}</span>
                    </p>
                  </div>
                  <div
                    style={{
                      width: "20%",
                      textAlign: "right",
                      paddingRight: "5px",
                      paddingTop: "5px",
                    }}
                  >
                    <img
                      src={require("../assets/images/airtel.png")}
                      style={{ width: "40px", height: "40px" }}
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

export default Airtel100Voucher;
