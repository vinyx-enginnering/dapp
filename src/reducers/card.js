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
  GET_GLO_FAIL,
  GET_GLO_REQUEST,
  GET_GLO_SUCCESS,
  GET_9MOBILE_FAIL,
  GET_9MOBILE_REQUEST,
  GET_9MOBILE_SUCCESS,
  GET_AIRTEL_FAIL,
  GET_AIRTEL_REQUEST,
  GET_AIRTEL_SUCCESS,
  GET_ALL_PIN_REQUEST,
  GET_ALL_PIN_SUCCESS,
  GET_ALL_PIN_FAIL,
  DELETE_ALL_PIN_REQUEST,
  DELETE_ALL_PIN_SUCCESS,
  DELETE_ALL_PIN_FAIL,
} from "../constant/types";

export const uploadVoucher = (state = {}, action) => {
  switch (action.type) {
    case UPLOAD_CARD_REQUEST:
      return { loading: true };
    case UPLOAD_CARD_SUCCESS:
      return { loading: false, card: action.payload };
    case UPLOAD_CARD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getVoucher = (state = [], action) => {
  switch (action.type) {
    case GET_UPLOADED_PINS_REQUEST:
      return { loading: true };
    case GET_UPLOADED_PINS_SUCCESS:
      return { loading: false, pins: action.payload };
    case GET_UPLOADED_PINS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getAllPin = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_PIN_REQUEST:
      return { loading: true };
    case GET_ALL_PIN_SUCCESS:
      return { loading: false, pins: action.payload };
    case GET_ALL_PIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteAllPin = (state = {}, action) => {
  switch (action.type) {
    case DELETE_ALL_PIN_REQUEST:
      return { loading: true };
    case DELETE_ALL_PIN_SUCCESS:
      return { loading: false, pins: action.payload };
    case DELETE_ALL_PIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getmtn = (state = [], action) => {
  switch (action.type) {
    case GET_MTN_REQUEST:
      return { loading: true };
    case GET_MTN_SUCCESS:
      return { loading: false, pins: action.payload };
    case GET_MTN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getglo = (state = [], action) => {
  switch (action.type) {
    case GET_GLO_REQUEST:
      return { loading: true };
    case GET_GLO_SUCCESS:
      return { loading: false, pins: action.payload };
    case GET_GLO_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getairtel = (state = [], action) => {
  switch (action.type) {
    case GET_AIRTEL_REQUEST:
      return { loading: true };
    case GET_AIRTEL_SUCCESS:
      return { loading: false, pins: action.payload };
    case GET_AIRTEL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const get9mobile = (state = [], action) => {
  switch (action.type) {
    case GET_9MOBILE_REQUEST:
      return { loading: true };
    case GET_9MOBILE_SUCCESS:
      return { loading: false, pins: action.payload };
    case GET_9MOBILE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
