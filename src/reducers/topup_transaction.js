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

export const VTAirtime = (state = {}, action) => {
  switch (action.type) {
    case VT_AIRTIME_REQUEST:
      return { loading: true };
    case VT_AIRTIME_SUCCESS:
      return { loading: false, transaction: action.payload };
    case VT_AIRTIME_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const queryVTDataPlans = (state = {}, action) => {
  switch (action.type) {
    case VT_QUERY_DATA_REQUEST:
      return { loading: true };
    case VT_QUERY_DATA_SUCCESS:
      return { loading: false, plans: action.payload };
    case VT_QUERY_DATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const VTData = (state = {}, action) => {
  switch (action.type) {
    case VT_DATA_REQUEST:
      return { loading: true };
    case VT_DATA_SUCCESS:
      return { loading: false, transaction: action.payload };
    case VT_DATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
