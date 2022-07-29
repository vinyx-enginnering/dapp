import api from "../util/api";
import {
  BULK_SMS_FAIL,
  BULK_SMS_REQUEST,
  BULK_SMS_SUCCESS,
} from "../constant/types";

export const sendBulkMessage =
  (channel, sender, message, numbers) => async (dispatch, getState) => {
    try {
      dispatch({
        type: BULK_SMS_REQUEST,
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
        "/txn/bulk-sms",
        { channel, sender, message, numbers },
        config
      );

      dispatch({
        type: BULK_SMS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: BULK_SMS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
