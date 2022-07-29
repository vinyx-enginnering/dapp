import api from "../util/api";
import {
    QUERY_SMILE_FAIL,
    QUERY_SMILE_REQUEST,
    QUERY_SMILE_SUCCESS,

    SMILE_DATA_FAIL,
    SMILE_DATA_REQUEST,
    SMILE_DATA_SUCCESS,

    VERIFY_SMILE_FAIL,
    VERIFY_SMILE_REQUEST,
    VERIFY_SMILE_SUCCESS,

    QUERY_SPECTRANET_FAIL,

    QUERY_SPECTRANET_REQUEST,

    QUERY_SPECTRANET_SUCCESS,

    SPECTRANET_DATA_FAIL,

    SPECTRANET_DATA_REQUEST,

    SPECTRANET_DATA_SUCCESS,
} from "../constant/types";

// verify gotv
export const verify_smile = (phone) => async (dispatch, getState) => {
  try {
    dispatch({
      type: VERIFY_SMILE_REQUEST,
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

    const { data } = await api.post("/api/smile/verify", { phone }, config);

    dispatch({
      type: VERIFY_SMILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: VERIFY_SMILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// verify gotv
export const smile_plans = () => async (dispatch, getState) => {
  try {

    dispatch({
      type: QUERY_SMILE_REQUEST,
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

    const { data } = await api.get("/api/smile/query", config);

    dispatch({
      type: QUERY_SMILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: QUERY_SMILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// verify gotv
export const subscribe_smile =
  ({ billersCode, varation_code, amount, phone }) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: SMILE_DATA_REQUEST,
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

      console.log({ billersCode, varation_code, amount, phone })
      const { data } = await api.post(
        "/api/smile/data",
        { billersCode, varation_code, amount, phone },
        config
      );

      dispatch({
        type: SMILE_DATA_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SMILE_DATA_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };





  // query spectranet plans
export const spectranet_plans = () => async (dispatch, getState) => {
  try {

    dispatch({
      type: QUERY_SPECTRANET_REQUEST,
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

    const { data } = await api.get("/api/spectranet/query", config);

    dispatch({
      type: QUERY_SPECTRANET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: QUERY_SPECTRANET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// subscribe spectranet
export const subscribe_spectranet =
  ({ billersCode, varation_code, amount, phone }) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: SPECTRANET_DATA_REQUEST,
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

      console.log({ billersCode, varation_code, amount, phone })
      const { data } = await api.post(
        "/api/spectranet/data",
        { billersCode, varation_code, amount, phone },
        config
      );

      dispatch({
        type: SPECTRANET_DATA_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SPECTRANET_DATA_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };