import { Button, Table } from "react-bootstrap";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllNetworks, removeAllPin } from "../actions/card";

function ImportedPins() {
  const dispatch = useDispatch();

  const getAllPin = useSelector((state) => state.getAllPin);
  const { loading, error, pins } = getAllPin;

  const deleteAllPin = useSelector((state) => state.deleteAllPin);
  const { loading:del_loading, error: del_error, pins: deleted } = deleteAllPin;

  useEffect(() => {
    dispatch(getAllNetworks());
  }, []);

  const glo = pins && pins.filter((pin) => pin.network === "Glo");
  const airtel = pins && pins.filter((pin) => pin.network === "Airtel");
  const mtn = pins && pins.filter((pin) => pin.network === "MTN");
  const mobile = pins && pins.filter((pin) => pin.network === "9mobile");

  const removeNetwork = (e) => {
    console.log(e.target.id);
    dispatch(removeAllPin(e.target.id))
  };

  return (
    <div>
      <p className="lead mt-4" style={{ color: "#8c5eff" }}>
        Imported Pins
      </p>
      {del_loading && <p className="lead p-2">Deleting...</p>}
      {deleted && <p className="lead p-2 bg-success text-light">Pins Deleted</p>}
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Network</th>
            
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {glo && glo.length > 0 && (
            <tr>
              <td>1</td>
              <td>Glo {glo.length -1 } units</td>
             
              <td>
                <Button className="" id="Glo" onClick={removeNetwork}>
                  Delete
                </Button>
              </td>
            </tr>
          )}

          {airtel && airtel.length > 0 && (
            <tr>
              <td>1</td>
              <td>Airtel {airtel.length} units </td>
              
              <td>
                <Button className="" id="Airtel" onClick={removeNetwork}>
                  Delete
                </Button>
              </td>
            </tr>
          )}

          {mtn && mtn.length > 0 && (
            <tr>
              <td>1</td>
              <td>MTN {mtn.length -1 } units</td>
             
              <td>
                <Button className="" id="MTN" onClick={removeNetwork}>
                  Delete
                </Button>
              </td>
            </tr>
          )}

          {mobile && mobile.length > 0 && (
            <tr>
              <td>1</td>
              <td>9mobile {mobile.length -1 } units </td>
             
              <td>
                <Button className="" id="9mobile" onClick={removeNetwork}>
                  Delete
                </Button>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default ImportedPins;
