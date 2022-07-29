import React, { useState } from "react";
import PinsDashboard from "../components/PinsDashboard";
import { Form, Button } from "react-bootstrap";
import Select from "react-select";

function UploadPins() {
  const [selectedNetwork, setSelectedNetwork] = useState("");

  const networkOptions = [
    { value: "MTN", label: "MTN" },
    { value: "Airtel", label: "Airtel" },
    { value: "Glo", label: "Glo" },
    { value: "9mobile", label: "9Mobile" },
  ];

  return (
    <div>
      <PinsDashboard />
      <p className="lead mt-3" style={{ color: "#8c5eff" }}>
        Print Uploaded Cards
      </p>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Select Network</Form.Label>
          <Select
            options={networkOptions}
            onChange={(e) => setSelectedNetwork(e.value)}
          />
          <Form.Text>Kindly select Network to print</Form.Text>
        </Form.Group>

        <Button
          variant="primary"
          target="_blank"
          href={`/printing/${selectedNetwork}`}
        >
          Start Printing
        </Button>
      </Form>
    </div>
  );
}

export default UploadPins;
