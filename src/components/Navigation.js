import React, { Fragment, useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Outlet } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/user";
import {
  FaArrowUp,
  FaBell,
  FaCog,
  FaFireAlt,
  FaSignInAlt,
  FaSignOutAlt,
  FaUserAlt,
} from "react-icons/fa";
import CustomContainer from "../components/CustomContainer";
import SideBar from "./SideBar";
import FloatingWhatsApp from "react-floating-whatsapp";

const Navigation = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow(true);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logout_controller = () => {
    if (userInfo) {
      dispatch(logout());
    }
  };

  return (
    <Fragment>
      <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#8c5eff" }}>
        <Container>
          <Navbar.Brand href="/">
            <img
              src={require("../assets/images/icon.png")}
              style={{ width: "50px", height: "50px", borderRadius: "20%" }}
              alt="logo"
            />
            <span style={{ fontSize: "1.6rem", marginTop: "10px" }}>
              | Business Solution
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {userInfo && (
                <Nav.Link className="text-light lead" href="/dashboard">
                  Dashboard
                </Nav.Link>
              )}

              <Nav.Link className="text-light lead" href="/">
                Home
              </Nav.Link>

              <Nav.Link className="text-light lead" href="/privacy">
                Legal
              </Nav.Link>
              <Nav.Link className="text-light lead" href="/faq">
                FAQs
              </Nav.Link>

              

              <Nav.Link className="text-light lead" href="/feature">
                Features
              </Nav.Link>

             

              <Nav.Link className="text-light lead" href="/contact">
                Contact
              </Nav.Link>
              
              {/* {userInfo && (
                <Nav.Link className="text-light" href="/upgrade-account">
                  Upgrade your permission & make more <FaFireAlt color="red" />
                </Nav.Link>
              )} */}
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Nav className="">
              {!userInfo && (
                <Nav.Link className="text-light lead" href="/login">
                  Login <FaSignInAlt />{" "}
                </Nav.Link>
              )}

              {userInfo && (
                <Nav.Link
                  className="text-light lead"
                  href="#"
                  onClick={logout_controller}
                >
                  Logout <FaSignOutAlt />{" "}
                </Nav.Link>
              )}
               {userInfo && (
                <Nav.Link className="text-light lead" href="/settings">
                Settings <FaCog />{" "}
              </Nav.Link>
              )}
              
              {userInfo && (
                <Nav.Link>
                  <SideBar />
                </Nav.Link>
              )}

             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <FloatingWhatsApp
        phoneNumber="2347017642649"
        accountName="Double Link"
        statusMessage="Typically replies within 10 mins"
        allowClickAway
        notification
        notificationDelay={180000}
        notificationSound={false}
        avatar={require("../assets/images/icon.png")}
      />
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
