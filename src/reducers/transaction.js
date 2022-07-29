import {
  GET_CUSTOMER_TRANSACTIONS_FAIL,
  GET_CUSTOMER_TRANSACTIONS_REQUEST,
  GET_CUSTOMER_TRANSACTIONS_SUCCESS,
  TXN_VTU_REQUEST,
  TXN_VTU_FAIL,
  TXN_VTU_SUCCESS,
  GET_DATA_PLANS_REQUEST,
  GET_DATA_PLANS_SUCCESS,
  GET_DATA_PLANS_FAIL,
  TXN_TOPUP_DATA_FAIL,
  TXN_TOPUP_DATA_REQUEST,
  TXN_TOPUP_DATA_SUCCESS,
  BULK_SMS_FAIL,
  BULK_SMS_REQUEST,
  BULK_SMS_SUCCESS,
  GENERATE_VOUCHER_FAIL,
  GENERATE_VOUCHER_REQUEST,
  GENERATE_VOUCHER_SUCCESS,
  PURCHASE_BULK_EPIN_REQUEST,
  PURCHASE_BULK_EPIN_SUCCESS,
  PURCHASE_BULK_EPIN_FAIL,
} from "../constant/types";

export const getCustomerTransactions = (state = {}, action) => {
  switch (action.type) {
    case GET_CUSTOMER_TRANSACTIONS_REQUEST:
      return { loading: true };
    case GET_CUSTOMER_TRANSACTIONS_SUCCESS:
      return { loading: false, transactions: action.payload };
    case GET_CUSTOMER_TRANSACTIONS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const purchaseVTUAirtime = (state = {}, action) => {
  switch (action.type) {
    case TXN_VTU_REQUEST:
      return { loading: true };
    case TXN_VTU_SUCCESS:
      return { loading: false, transaction: action.payload };
    case TXN_VTU_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const fetchDataPlans = (state = {}, action) => {
  switch (action.type) {
    case GET_DATA_PLANS_REQUEST:
      return { loading: true };
    case GET_DATA_PLANS_SUCCESS:
      return { loading: false, plans: action.payload };
    case GET_DATA_PLANS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const purchaseDataPlan = (state = {}, action) => {
  switch (action.type) {
    case TXN_TOPUP_DATA_REQUEST:
      return { loading: true };
    case TXN_TOPUP_DATA_SUCCESS:
      return { loading: false, transaction: action.payload };
    case TXN_TOPUP_DATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const sendBulkSms = (state = {}, action) => {
  switch (action.type) {
    case BULK_SMS_REQUEST:
      return { loading: true };
    case BULK_SMS_SUCCESS:
      return { loading: false, transaction: action.payload };
    case BULK_SMS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const generateVoucher = (state = {}, action) => {
  switch (action.type) {
    case GENERATE_VOUCHER_REQUEST:
      return { loading: true };
    case GENERATE_VOUCHER_SUCCESS:
      return { loading: false, transaction: action.payload };
    case GENERATE_VOUCHER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const purchaseBulkPin = (state = {}, action) => {
  switch (action.type) {
    case PURCHASE_BULK_EPIN_REQUEST:
      return { loading: true };
    case PURCHASE_BULK_EPIN_SUCCESS:
      return { loading: false, transaction: action.payload };
    case PURCHASE_BULK_EPIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
