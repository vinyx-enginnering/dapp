import api from "../util/api";
import {
  GET_CUSTOMER_TRANSACTIONS_FAIL,
  GET_CUSTOMER_TRANSACTIONS_REQUEST,
  GET_CUSTOMER_TRANSACTIONS_SUCCESS,
  TXN_VTU_REQUEST,
  TXN_VTU_SUCCESS,
  TXN_VTU_FAIL,
  GET_DATA_PLANS_FAIL,
  GET_DATA_PLANS_REQUEST,
  GET_DATA_PLANS_SUCCESS,
  TXN_TOPUP_DATA_FAIL,
  TXN_TOPUP_DATA_REQUEST,
  TXN_TOPUP_DATA_SUCCESS,
  GENERATE_VOUCHER_FAIL,
  GENERATE_VOUCHER_REQUEST,
  GENERATE_VOUCHER_SUCCESS,
  PURCHASE_BULK_EPIN_REQUEST,
  PURCHASE_BULK_EPIN_SUCCESS,
  PURCHASE_BULK_EPIN_FAIL,
} from "../constant/types";

// GRABBING CUSTOMER TRANSACTION HISTORY PROCESS
export const getTransactionAction = (limit) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_CUSTOMER_TRANSACTIONS_REQUEST,
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

    const { data } = await api.get(`/txn/list/${limit}`, config);

    dispatch({
      type: GET_CUSTOMER_TRANSACTIONS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_CUSTOMER_TRANSACTIONS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// GRABBING CUSTOMER TRANSACTION HISTORY PROCESS
export const airtimeVTU =
  (network, amount, number) => async (dispatch, getState) => {
    try {
      dispatch({
        type: TXN_VTU_REQUEST,
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
        "/txn/vtu-airtime",
        { network, amount, number },
        config
      );

      dispatch({
        type: TXN_VTU_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: TXN_VTU_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// GRABBING CUSTOMER TRANSACTION HISTORY PROCESS
export const fetchDataPlans = (network) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_DATA_PLANS_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await api.post(`/txn/query-plans`, { network }, config);

    dispatch({
      type: GET_DATA_PLANS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_DATA_PLANS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const purchaseDataPlan =
  (number, network, plan) => async (dispatch, getState) => {
    try {
      dispatch({
        type: TXN_TOPUP_DATA_REQUEST,
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

      console.log({ number, network, plan });

      const { data } = await api.post(
        "/txn/topup-data",
        { number, network, plan },
        config
      );

      dispatch({
        type: TXN_TOPUP_DATA_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: TXN_TOPUP_DATA_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const purchaseVoucher =
  (network, denomination) => async (dispatch, getState) => {
    try {
      dispatch({
        type: GENERATE_VOUCHER_REQUEST,
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
        "/epin",
        { network, denomination },
        config
      );

      dispatch({
        type: GENERATE_VOUCHER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GENERATE_VOUCHER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const purchaseBulk =
  (network, denomination, quantity) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PURCHASE_BULK_EPIN_REQUEST,
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
        "/bulkpins",
        { network, denomination, quantity },
        config
      );

      dispatch({
        type: PURCHASE_BULK_EPIN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PURCHASE_BULK_EPIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
