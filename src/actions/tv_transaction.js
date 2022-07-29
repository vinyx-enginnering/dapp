import api from "../util/api";
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

// verify gotv
export const verify_gotv = (number) => async (dispatch, getState) => {
  try {
    dispatch({
      type: VERIFY_GOTV_REQUEST,
    });

    //   const {
    //     userLogin: { userInfo },
    //   } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        // token: userInfo.token,
      },
    };

    const { data } = await api.post("/api/gotv/verify", { number }, config);

    dispatch({
      type: VERIFY_GOTV_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: VERIFY_GOTV_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// verify gotv
export const gotv_plans = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_PLANS_GOTV_REQUEST,
    });

    //   const {
    //     userLogin: { userInfo },
    //   } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        // token: userInfo.token,
      },
    };

    const { data } = await api.get("/api/gotv/query", config);

    dispatch({
      type: GET_PLANS_GOTV_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PLANS_GOTV_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// verify gotv
export const subscribe_gotv =
  ({ billersCode, varation_code, amount, phone }) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: SUBSCRIBE_GOTV_REQUEST,
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
        "/api/gotv/plan",
        { billersCode, varation_code, amount, phone },
        config
      );

      dispatch({
        type: SUBSCRIBE_GOTV_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SUBSCRIBE_GOTV_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// verify dstv
export const verify_dstv = (number) => async (dispatch, getState) => {
  try {
    dispatch({
      type: VERIFY_DSTV_REQUEST,
    });

    //   const {
    //     userLogin: { userInfo },
    //   } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        // token: userInfo.token,
      },
    };

    const { data } = await api.post("/api/dstv/verify", { number }, config);

    dispatch({
      type: VERIFY_DSTV_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: VERIFY_DSTV_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// dstv plans
export const dstv_plans = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_PLANS_DSTV_REQUEST,
    });

    //   const {
    //     userLogin: { userInfo },
    //   } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        // token: userInfo.token,
      },
    };

    const { data } = await api.get("/api/dstv/query", config);

    dispatch({
      type: GET_PLANS_DSTV_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PLANS_DSTV_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// subscribe dstv
export const subscribe_dstv =
  ({ billersCode, varation_code, amount, phone }) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: SUBSCRIBE_DSTV_REQUEST,
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
        "/api/dstv/plan",
        { billersCode, varation_code, amount, phone },
        config
      );

      dispatch({
        type: SUBSCRIBE_DSTV_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SUBSCRIBE_DSTV_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
