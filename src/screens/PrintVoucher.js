import React, { Fragment, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Loader from "../components/Loader";
import { useSelector, useDispatch } from "react-redux";
import { getCard } from "../actions/card";
import { useParams, useNavigate } from "react-router-dom";

function PrintVoucher() {
      // grab params from URI
  const { network } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      dispatch(getCard(network))
    }, [])
    

    const getVoucher = useSelector((state) => state.getVoucher);
    const { loading, error, pins } = getVoucher;

  return (
    <Fragment>
        {loading && <p>Generating Vouchers</p>}
        {pins && pins.network == "Glo 500" && navigate("/print/glo-500")}
        {pins && pins.network == "Glo 100" && navigate("/print/glo-100")}
        {pins && pins.network == "Glo 200" && navigate("/print/glo-200")}

        {pins && pins.network == "Airtel 100" && navigate("/print/airtel-100")}
        {pins && pins.network == "Airtel 200" && navigate("/print/airtel-200")}
        {pins && pins.network == "Airtel 500" && navigate("/print/airtel-500")}

        {pins && pins.network == "MTN 100" && navigate("/print/mtn-100")}
        {pins && pins.network == "MTN 200" && navigate("/print/mtn-200")}
        {pins && pins.network == "MTN 500" && navigate("/print/mtn-500")}

        {pins && pins.network == "9mobile 100" && navigate("/print/eti-100")}
        {pins && pins.network == "9mobile 200" && navigate("/print/eti-200")}
        {pins && pins.network == "9mobile 500" && navigate("/print/eti-500")}



    </Fragment>
  )
}

export default PrintVoucher