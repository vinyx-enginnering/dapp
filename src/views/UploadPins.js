import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import Select from "react-select";
import Loader from "../components/Loader";
import api from "../util/api";
import { useSelector, useDispatch } from "react-redux";
import { uploadCard } from "../actions/card";
import ImportedPins from "./ImportedPins";

function UploadPins() {
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [selectedDenomination, setSelectedDenomination] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const uploadVoucher = useSelector((state) => state.uploadVoucher);
  const { loading, error, card } = uploadVoucher;

  const networkOptions = [
    { value: "MTN", label: "MTN" },
    { value: "Airtel", label: "Airtel" },
    { value: "Glo", label: "Glo" },
    { value: "9mobile", label: "9Mobile" },
  ];

  const denominationOptions = [
    { value: "100", label: "100" },
    { value: "200", label: "200" },
    { value: "500", label: "500" },
    { value: "1000", label: "1000" },
  ];

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("images", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await api.post("/upload", formData, config);

      setSelectedFile(data);

      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      selectedNetwork,
      selectedDenomination,
      selectedFile,
    });

    dispatch(
      uploadCard(selectedNetwork, selectedDenomination, selectedFile)
    );
  };

  return (
    <div>
      <p className="lead" style={{ color: "#8c5eff" }}>
        Upload Pin Extract
      </p>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Select Network</Form.Label>
          <Select
            options={networkOptions}
            onChange={(e) => setSelectedNetwork(e.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Select Denomination</Form.Label>
          <Select
            options={denominationOptions}
            onChange={(e) => setSelectedDenomination(e.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Choose File</Form.Label>
          <Form.Control
            type="file"
            placeholder={uploading ? "Loading..." : "Choose file"}
            name="images"
            onChange={uploadFileHandler}
            accept=".txt"
          ></Form.Control>
        </Form.Group>

        {loading && <Loader />}
        {error && <p className="lead p-2 bg-danger text-light">{error}</p>}
        {card && <p className="lead p-2 bg-success text-light">{card.message}</p>}
        <Button variant="primary" type="submit">
          Upload
        </Button>
      </Form>

      <ImportedPins />
    </div>
  );
}

export default UploadPins;
