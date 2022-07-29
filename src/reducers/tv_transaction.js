import {
  VERIFY_GOTV_FAIL,
  VERIFY_GOTV_REQUEST,
  VERIFY_GOTV_SUCCESS,
  GET_PLANS_GOTV_FAIL,
  GET_PLANS_GOTV_REQUEST,
  GET_PLANS_GOTV_SUCCESS,
  SUBSCRIBE_GOTV_FAIL,
  SUBSCRIBE_GOTV_REQUEST,
  SUBSCRIBE_GOTV_SUCCESS,

  VERIFY_DSTV_FAIL,
  VERIFY_DSTV_REQUEST,
  VERIFY_DSTV_SUCCESS,
  GET_PLANS_DSTV_FAIL,
  GET_PLANS_DSTV_REQUEST,
  GET_PLANS_DSTV_SUCCESS,
  SUBSCRIBE_DSTV_FAIL,
  SUBSCRIBE_DSTV_REQUEST,
  SUBSCRIBE_DSTV_SUCCESS,

  
} from "../constant/types";

export const verifyGotv = (state = {}, action) => {
  switch (action.type) {
    case VERIFY_GOTV_REQUEST:
      return { loading: true };
    case VERIFY_GOTV_SUCCESS:
      return { loading: false, verification: action.payload };
    case VERIFY_GOTV_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const GotvPlans = (state = [], action) => {
  switch (action.type) {
    case GET_PLANS_GOTV_REQUEST:
      return { loading: true };
    case GET_PLANS_GOTV_SUCCESS:
      return { loading: false, plans: action.payload };
    case GET_PLANS_GOTV_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const subscribeGotv = (state = {}, action) => {
  switch (action.type) {
    case SUBSCRIBE_GOTV_REQUEST:
      return { loading: true };
    case SUBSCRIBE_GOTV_SUCCESS:
      return { loading: false, transaction: action.payload };
    case SUBSCRIBE_GOTV_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


export const verifyDstv = (state = {}, action) => {
    switch (action.type) {
      case VERIFY_DSTV_REQUEST:
        return { loading: true };
      case VERIFY_DSTV_SUCCESS:
        return { loading: false, verification: action.payload };
      case VERIFY_DSTV_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const DstvPlans = (state = [], action) => {
    switch (action.type) {
      case GET_PLANS_DSTV_REQUEST:
        return { loading: true };
      case GET_PLANS_DSTV_SUCCESS:
        return { loading: false, plans: action.payload };
      case GET_PLANS_DSTV_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const subscribeDstv = (state = {}, action) => {
    switch (action.type) {
      case SUBSCRIBE_DSTV_REQUEST:
        return { loading: true };
      case SUBSCRIBE_DSTV_SUCCESS:
        return { loading: false, transaction: action.payload };
      case SUBSCRIBE_DSTV_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  