import api from "../util/api";
import {
  UPLOAD_CARD_FAIL,
  UPLOAD_CARD_REQUEST,
  UPLOAD_CARD_SUCCESS,
  GET_UPLOADED_PINS_FAIL,
  GET_UPLOADED_PINS_REQUEST,
  GET_UPLOADED_PINS_SUCCESS,
  GET_MTN_REQUEST,
  GET_MTN_SUCCESS,
  GET_MTN_FAIL,
  GET_AIRTEL_REQUEST,
  GET_AIRTEL_SUCCESS,
  GET_AIRTEL_FAIL,
  GET_GLO_REQUEST,
  GET_GLO_SUCCESS,
  GET_GLO_FAIL,
  GET_9MOBILE_SUCCESS,
  GET_9MOBILE_REQUEST,
  GET_9MOBILE_FAIL,
  GET_ALL_PIN_REQUEST,
  GET_ALL_PIN_SUCCESS,
  GET_ALL_PIN_FAIL,
  DELETE_ALL_PIN_REQUEST,
  DELETE_ALL_PIN_SUCCESS,
  DELETE_ALL_PIN_FAIL,
} from "../constant/types";

export const uploadCard =
  (network, selectedDenomination, selectedFile) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: UPLOAD_CARD_REQUEST,
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
        "/voucher/upload",
        { network, selectedDenomination, selectedFile },
        config
      );

      dispatch({
        type: UPLOAD_CARD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPLOAD_CARD_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getCard = (network) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_UPLOADED_PINS_REQUEST,
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

    const { data } = await api.get(`/voucher/list/${network}`, config);

    dispatch({
      type: GET_UPLOADED_PINS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_UPLOADED_PINS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeAllPin = (network) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELETE_ALL_PIN_REQUEST,
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

    const { data } = await api.delete(`/voucher/delete/${network}`, config);

    dispatch({
      type: DELETE_ALL_PIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_ALL_PIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getallmtn = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_MTN_REQUEST,
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

    const { data } = await api.get(`/voucher/mtn`, config);

    dispatch({
      type: GET_MTN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_MTN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getallairtel = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_AIRTEL_REQUEST,
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

    const { data } = await api.get(`/voucher/airtel`, config);

    dispatch({
      type: GET_AIRTEL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_AIRTEL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getallglo = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_GLO_REQUEST,
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

    const { data } = await api.get(`/voucher/glo`, config);

    dispatch({
      type: GET_GLO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_GLO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getall9mobile = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_9MOBILE_REQUEST,
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

    const { data } = await api.get(`/voucher/9mobile`, config);

    dispatch({
      type: GET_9MOBILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_9MOBILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAllNetworks = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_ALL_PIN_REQUEST,
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

    const { data } = await api.get(`/voucher/all`, config);

    dispatch({
      type: GET_ALL_PIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_PIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
