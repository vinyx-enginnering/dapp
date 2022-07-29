import {
    QUERY_SMILE_FAIL,
    QUERY_SMILE_REQUEST,
    QUERY_SMILE_SUCCESS,

    QUERY_SPECTRANET_FAIL,

    QUERY_SPECTRANET_REQUEST,

    QUERY_SPECTRANET_SUCCESS,

    SMILE_DATA_FAIL,
    SMILE_DATA_REQUEST,
    SMILE_DATA_SUCCESS,

    SPECTRANET_DATA_FAIL,

    SPECTRANET_DATA_REQUEST,

    SPECTRANET_DATA_SUCCESS,

    VERIFY_SMILE_FAIL,
    VERIFY_SMILE_REQUEST,
    VERIFY_SMILE_SUCCESS,

  } from "../constant/types";



export const verifySmile = (state = {}, action) => {
    switch (action.type) {
      case VERIFY_SMILE_REQUEST:
        return { loading: true };
      case VERIFY_SMILE_SUCCESS:
        return { loading: false, verification: action.payload };
      case VERIFY_SMILE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const SmilePlans = (state = [], action) => {
    switch (action.type) {
      case QUERY_SMILE_REQUEST:
        return { loading: true };
      case QUERY_SMILE_SUCCESS:
        return { loading: false, plans: action.payload };
      case QUERY_SMILE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const subscribeSmile = (state = {}, action) => {
    switch (action.type) {
      case SMILE_DATA_REQUEST:
        return { loading: true };
      case SMILE_DATA_SUCCESS:
        return { loading: false, transaction: action.payload };
      case SMILE_DATA_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };


  export const SpectranetPlans = (state = [], action) => {
    switch (action.type) {
      case QUERY_SPECTRANET_REQUEST:
        return { loading: true };
      case QUERY_SPECTRANET_SUCCESS:
        return { loading: false, plans: action.payload };
      case QUERY_SPECTRANET_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const subscribeSpectranet = (state = {}, action) => {
    switch (action.type) {
      case SPECTRANET_DATA_REQUEST:
        return { loading: true };
      case SPECTRANET_DATA_SUCCESS:
        return { loading: false, transaction: action.payload };
      case SPECTRANET_DATA_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };