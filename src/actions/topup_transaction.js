import api from "../util/api";
import {
  VT_AIRTIME_FAIL,
  VT_AIRTIME_REQUEST,
  VT_AIRTIME_SUCCESS,
  VT_DATA_FAIL,
  VT_DATA_REQUEST,
  VT_DATA_SUCCESS,
  VT_QUERY_DATA_FAIL,
  VT_QUERY_DATA_REQUEST,
  VT_QUERY_DATA_SUCCESS,
} from "../constant/types";

// airtime topup
export const vt_airtime =
  (serviceID, amount, phone) => async (dispatch, getState) => {
    try {
      dispatch({
        type: VT_AIRTIME_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          token: userInfo.token,
        },
      };

      const { data } = await api.post(
        "/api/airtime",
        { serviceID, amount, phone },
        config
      );

      dispatch({
        type: VT_AIRTIME_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: VT_AIRTIME_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// vt data plans
export const vt_query_dataplans = (network) => async (dispatch, getState) => {
  try {
    dispatch({
      type: VT_QUERY_DATA_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await api.get(`/api/query/${network}`, config);

    dispatch({
      type: VT_QUERY_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: VT_QUERY_DATA_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const vt_data =
  ({ serviceId, billersCode, varation_code, amount, phone }) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: VT_DATA_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          token: userInfo.token,
        },
      };

      console.log({ serviceId, billersCode, varation_code, amount, phone })

      const { data } = await api.post(
        "/api/data",
        { serviceId, billersCode, varation_code, amount, phone },
        config
      );

      dispatch({
        type: VT_DATA_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: VT_DATA_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
