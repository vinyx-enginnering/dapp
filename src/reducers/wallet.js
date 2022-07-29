import {
    GET_CUSTOMER_WALLET_FAIL,
    GET_CUSTOMER_WALLET_REQUEST,
    GET_CUSTOMER_WALLET_SUCCESS,
    TXN_FUND_WALLET_FAIL,
    TXN_FUND_WALLET_REQUEST,
    TXN_FUND_WALLET_SUCCESS
   
  } from "../constant/types";
  
  export const getCustomerWallet = (state = {}, action) => {
    switch (action.type) {
      case GET_CUSTOMER_WALLET_REQUEST:
        return { loading: true };
      case GET_CUSTOMER_WALLET_SUCCESS:
        return { loading: false, wallet: action.payload };
      case GET_CUSTOMER_WALLET_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const fundCustomerWallet = (state = {}, action) => {
    switch (action.type) {
      case TXN_FUND_WALLET_REQUEST:
        return { loading: true };
      case TXN_FUND_WALLET_SUCCESS:
        return { loading: false, transaction: action.payload };
      case TXN_FUND_WALLET_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };