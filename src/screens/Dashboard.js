import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  FaBuyNLarge,
  FaHistory,
  FaMailBulk,
  FaMobile,
  FaMoneyBillAlt,
  FaNetworkWired,
  FaPrint,
  FaReceipt,
  FaSimCard,
  FaTv,
  FaUpload,
  FaWallet,
  FaWifi,
} from "react-icons/fa";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import Wallet from "../views/Wallet";
import TransactionsScreen from "./TransactionsScreen";
import Airtime from "../views/Airtime";
import GenerateVoucher from "../views/GenerateVoucher";
import DataBundle from "../views/DataBundle";
import BulkSms from "../views/BulkSms";
import UploadPins from "../views/UploadPins";
import PrintingCards from "../views/PrintingCards";
import PurchaseBulkPins from "../views/PurchaseBulkPins";
import GoTV from "../views/GoTV";
import DsTV from "../views/DsTV";

const Dashboard = () => {
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      return navigate("/login");
    }
  }, []);

  return (
    <div
      className="pt-4 px-2 pb-5"
      style={{ margin: "auto", backgroundColor: "#f6f6f6", marginTop: "0px" }}
    >
      <Tab.Container id="left-tabs-example" defaultActiveKey="wallet">
        <Row>
          <Col sm={2} md={2} lg={2}>
            <Nav variant="pills" className="flex-column ">
              <Nav.Item>
                <Nav.Link eventKey="wallet">
                  <span className="px-2">
                    <FaWallet />
                  </span>{" "}
                  Wallet{" "}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="transactions">
                  <span className="px-2">
                    <FaHistory />
                  </span>{" "}
                  Transactions{" "}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="airtime">
                  {" "}
                  <span className="px-2">
                    <FaMobile />
                  </span>
                  Airtime VTU{" "}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="generate_voucher">
                  <span className="px-2">
                    <FaMobile />
                  </span>
                  Generate Voucher
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="data">
                  {" "}
                  <span className="px-2">
                    <FaWifi />
                  </span>
                  Data{" "}
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="gotv">
                  {" "}
                  <span className="px-2">
                    <FaTv />
                  </span>
                  GoTV{" "}
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="dstv">
                  {" "}
                  <span className="px-2">
                    <FaTv />
                  </span>
                  DsTV{" "}
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="bulk_sms">
                  <span className="px-2">
                    <FaMailBulk />
                  </span>{" "}
                  Bulk SMS{" "}
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="print_cards">
                  <span className="px-2">
                    <FaPrint />
                  </span>{" "}
                  Print Cards
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="import_epins">
                  {" "}
                  <span className="px-2">
                    <FaUpload />
                  </span>{" "}
                  Import E-pins
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="purchase_bulk_epins">
                  {" "}
                  <span className="px-2">
                    <FaBuyNLarge />
                  </span>{" "}
                  Purchase Bulk E-pins
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10} md={10} lg={10}>
            <div style={{ width: "80%" }}>
              <Tab.Content>
                <Tab.Pane eventKey="wallet">
                  <Wallet />
                </Tab.Pane>
                <Tab.Pane eventKey="transactions">
                  <TransactionsScreen />
                </Tab.Pane>
                <Tab.Pane eventKey="airtime">
                  <Airtime />
                </Tab.Pane>
                <Tab.Pane eventKey="generate_voucher">
                  <GenerateVoucher />
                </Tab.Pane>
                <Tab.Pane eventKey="data">
                  <DataBundle />
                </Tab.Pane>

                <Tab.Pane eventKey="gotv">
                  <GoTV />
                </Tab.Pane>

                <Tab.Pane eventKey="dstv">
                  <DsTV />
                </Tab.Pane>

                <Tab.Pane eventKey="bulk_sms">
                  <BulkSms />
                </Tab.Pane>
                <Tab.Pane eventKey="print_cards">
                  <PrintingCards />
                </Tab.Pane>
                <Tab.Pane eventKey="import_epins">
                  <UploadPins />
                </Tab.Pane>

                <Tab.Pane eventKey="purchase_bulk_epins">
                  <PurchaseBulkPins />
                </Tab.Pane>
              </Tab.Content>
              <footer className="text-secondary text-end py-5">Copyright © 2022. Doublelink Portal</footer>
            </div>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Dashboard;
