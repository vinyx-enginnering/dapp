import React, { Fragment } from "react";
import { Accordion } from "react-bootstrap";
import AppFooter from "../components/AppFooter";

function FAQ() {
  return (
    <Fragment>
      <div className="container mt-3">
        <div className="bg-light p-5">
          <h1 className="display-4" style={{ color: "#8c5eff" }}>
            <span className="text-dark">Learn from</span> Frequently Asked
            Question
          </h1>

          <hr />
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <span className="h3">What is Activation</span>
              </Accordion.Header>
              <Accordion.Body>
                <p className="lead py-2">
                  Activiation involve requesting for access key, this is
                  necessary to unlock the web Portal
                </p>
                <a href="/contact">
                  Request for access here, by contacting the support team
                </a>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <span className="h3">How to Create an account</span>
              </Accordion.Header>
              <Accordion.Body>
                <p className="lead">
                  To create a new account, you will need to visit the
                  registeration page{" "}
                  <a href="/register">Click here register </a>
                </p>
                <p className="lead">
                  When you get to the registeration page, enter the detail
                  requested and click on register
                </p>
                <p className="lead">
                  If your details are correct you'll be logged in, to begin{" "}
                  <span style={{ color: "#8c5eff" }}>transacting 👍</span>
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <span className="h3">Why do i need to upgrade</span>
              </Accordion.Header>
              <Accordion.Body>
                <p className="lead">
                  When you register an account with the mobile app, you wont be
                  able to login to the Portal.{" "}
                  <span style={{ color: "#8c5eff" }}>
                    You'll be able to login only to the mobile app
                  </span>
                </p>
                <p className="lead">
                  So, to use the Portal for your business, you'll need to
                  upgrade your access to{" "}
                  <span style={{ color: "#8c5eff" }}>
                    Business Class Account
                  </span>
                </p>
                <p className="lead">
                  You can only upgrade your account from the{" "}
                  <span style={{ color: "#8c5eff" }}>Mobile App</span>
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <span className="h3">How do i reset my password</span>
              </Accordion.Header>
              <Accordion.Body>
                <p className="lead">
                  To enforce security, we have removed all access to reseting
                  password from my App & Websites
                </p>
                <p className="lead">
                  If you lose your password, you'll have to contact your help
                  centre, for account password reset!
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <span className="h3">
                  How Do I Get My Registration Token After Payment?
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <p className="lead">
                  After You've paid, for your Registration Token
                </p>

                <p className="lead">
                  It will be sent to your email, or Whatsapp
                </p>

                <p className="lead">
                  Ensure to contact us, immediately you've paid
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>
                <span className="h3">
                  My Transaction Failed But My Wallet was Debited
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <p className="lead">
                  This only happens as a result of unstable internet or network
                  connectivity
                </p>

                <p className="lead">Kinly contact our help centre</p>

                <p className="lead">
                  Send us screenshot of the transactions, and your wallet ID
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
              <Accordion.Header>
                <span className="h3">What are DND Restrictions</span>
              </Accordion.Header>
              <Accordion.Body>
                <p className="lead">DND simply means “Do Not Disturb”</p>

                <p className="lead">
                  It is a service put out by the NCC (Nigerian Communication
                  Commission) in order to protect subscribers from unsolicited
                  text messages.
                </p>

                <p className="lead">
                  This means your messages to DND Numbers might not be
                  delivered.
                </p>

                <p className="lead">
                  But then, to send sms to DND numbers, you'll need to register
                  a DND Route
                </p>

                <p className="lead">
                  Contact our help centre, to register your DND Route So you can
                  begin sending bulk messaging to DND Numbers
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7">
              <Accordion.Header>
                <span className="h3">Why is My Meter Rejecting My Token?</span>
              </Accordion.Header>
              <Accordion.Body>
                <p className="lead">
                  This could happen as a result of the following reasons:
                </p>

                <p className="lead">
                  <ul>
                    <li>
                      There has been a change in your tariff index. Please
                      ensure you visit or call your Electric distribution
                      company to resolve this.
                    </li>
                    <li>
                      The purchase was for the wrong meter number. Kindly
                      confirm you are loading the token on the right meter.
                    </li>
                    <li>
                      A network issue with your electricity distribution
                      company. You need to hold for a while and try loading the
                      token again much later.
                    </li>
                    <li>
                      The meter has not yet been activated. An activation code
                      will be required from the distribution company.
                    </li>
                  </ul>
                </p>

                <p className="lead">
                  Kindly contact our help centre, if the error persist
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <div
        className="py-5"
        style={{ backgroundColor: "#8c5eff", textAlign: "center" }}
      >
        <h1 className="display-5 text-light">Do you need more help? 😟</h1>
        <p className="lead text-light">
          If you have more concerns, or issues that wasn't covered{" "}
          <a className="text-light" href="/contact">
            Contact Us
          </a>
        </p>
        <p className="lead text-light">We're always available to assist 👍</p>
      </div>
      <AppFooter />
    </Fragment>
  );
}

export default FAQ;
