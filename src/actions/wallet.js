import api from "../util/api";
import {
    GET_CUSTOMER_WALLET_FAIL,
    GET_CUSTOMER_WALLET_REQUEST,
    GET_CUSTOMER_WALLET_SUCCESS,
    TXN_FUND_WALLET_FAIL,
    TXN_FUND_WALLET_REQUEST,
    TXN_FUND_WALLET_SUCCESS
} from "../constant/types.js";

// CUSTOMER LOGIN PROCESS
export const getWalletAction = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_CUSTOMER_WALLET_REQUEST,
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

      const { data } = await api.get(
        "/wallet",
        config
      );
  
      dispatch({
        type: GET_CUSTOMER_WALLET_SUCCESS,
        payload: data,
      });
  
      
    } catch (error) {
      dispatch({
        type: GET_CUSTOMER_WALLET_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  export const fundCustomerWallet = (amount, desc, txnref) => async (dispatch, getState) => {
    try {
      dispatch({
        type: TXN_FUND_WALLET_REQUEST,
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
        "/txn/fund",
        {
            amount,
            desc,
            txnref
        },
        config
      );
  
      dispatch({
        type: TXN_FUND_WALLET_SUCCESS,
        payload: data,
      });
  
      
    } catch (error) {
      dispatch({
        type: TXN_FUND_WALLET_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };