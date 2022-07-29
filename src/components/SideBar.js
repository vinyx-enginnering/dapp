import React, { useState, useEffect, useMemo } from "react";
import { ListGroup, ListGroupItem, Offcanvas } from "react-bootstrap";
import {
  FaAppStore,
  FaAppStoreIos,
  FaBars,
  FaDesktop,
  FaHistory,
  FaMobile,
  FaMobileAlt,
  FaMoneyBillAlt,
  FaPaperPlane,
  FaPhone,
  FaRoute,
  FaWhatsapp,
  FaWifi,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { get_user } from "../actions/user.js";

function SideBar() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow(true);

  const dispatch = useDispatch();

  const getUser = useSelector((state) => state.getUser);
  const { user } = getUser;

  const getWallet = useSelector((state) => state.getWallet);
  const { wallet } = getWallet;

  const redirect = (route) => {
    setShow(false);

    navigate(route);
  };

  useMemo(() => dispatch(get_user()), [0]);

  return (
    <div>
      <FaBars onClick={toggleShow} size={22} color="white" />
      <Offcanvas
        show={show}
        onHide={handleClose}
        scroll={false}
        style={{ backgroundColor: "#8c5eff" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <span className="lead">Double Link</span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="text-center">
            <img
              src={user && user.image}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "20%",
                textAlign: "center",
                backgroundColor: "white",
                padding: "2px",
              }}
              alt="logo"
            />
            <p className="lead mb-0">{user && user.fullname}</p>
            <p className="lead mb-0" style={{ fontSize: "1.3rem" }}>
              Voucher Name:{" "}
              <span style={{ color: "white" }}>
                {user && user.company_name}
              </span>
            </p>
            <p style={{ fontSize: "1.3rem" }}>
              Wallet ID:{" "}
              <span style={{ color: "white" }}>{wallet && wallet._id}</span>
            </p>
            <hr />
          </div>
          <div>
            <ListGroup>
              <ListGroupItem action variant="primary">
                <FaMoneyBillAlt /> Withdraw Fund{" "}
                <span className="text-danger">Coming Next</span>
              </ListGroupItem>
              <ListGroupItem action variant="primary">
                <FaWhatsapp /> Whatsapp Bulk Messages{" "}
                <span className="text-danger">Coming Next</span>
              </ListGroupItem>
              <ListGroupItem
                action
                onClick={() => redirect("/phonebook")}
                variant="primary"
              >
                <FaPhone /> Manage Phone Book
              </ListGroupItem>
              <ListGroupItem
                action
                onClick={() => redirect("/transaction")}
                variant="primary"
              >
                <FaHistory /> View Transactions
              </ListGroupItem>
              <ListGroupItem action variant="primary">
                <FaAppStore /> App Version{" "}
                <span style={{ color: "#8c5eff" }}>
                  Beta Release v1.0.3
                </span>
              </ListGroupItem>
              <ListGroupItem action variant="primary">
                <FaPaperPlane /> Next Release{" "}
                <span style={{ color: "#8c5eff" }}>20th August 2022</span>
              </ListGroupItem>
            </ListGroup>
          </div>

          <hr />
          <div>
            <ListGroup>
              <ListGroupItem
                action
                variant="primary"
                onClick={() => redirect("/airtime")}
              >
                <FaMobile /> Airtime
              </ListGroupItem>
              <ListGroupItem
                action
                variant="primary"
                onClick={() => redirect("/dataplan")}
              >
                <FaMobileAlt /> Data Bundle
              </ListGroupItem>
              <ListGroupItem
                action
                variant="primary"
                onClick={() => redirect("/smile")}
              >
                <FaWifi /> Smile Internet
              </ListGroupItem>
              <ListGroupItem
                action
                variant="primary"
                onClick={() => redirect("/spectranet")}
              >
                <FaRoute /> Spectranet Packages
              </ListGroupItem>
            </ListGroup>
          </div>

          <hr />
          <div>
            <ListGroup>
              <ListGroupItem action variant="primary">
                <FaAppStoreIos /> Download Mobile App
              </ListGroupItem>
              <ListGroupItem action variant="primary">
                <FaDesktop /> Download Desktop App
              </ListGroupItem>
            </ListGroup>
          </div>
        </Offcanvas.Body>
        <footer className="py-3 text-light lead text-center">
          Copyright 2022. Doublelink Portal
        </footer>
      </Offcanvas>
    </div>
  );
}

export default SideBar;
