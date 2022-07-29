import api from "../util/api.js";
import {
  NEWSLETTER_FAIL,
  NEWSLETTER_REQUEST,
  NEWSLETTER_SUCCESS,
  SEND_MESSAGE_FAIL,
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
} from "../constant/types.js";

// SEND MESSAGE
export const contact_us =
  (message, email, fullname) => async (dispatch, getState) => {
    try {
      dispatch({
        type: SEND_MESSAGE_REQUEST,
      });

      

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await api.post(
        "/bulkpins/contact",
        { message, email, fullname },
        config
      );

      dispatch({
        type: SEND_MESSAGE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SEND_MESSAGE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  // NEWS LETTER
export const send_newsletter =
(email) => async (dispatch, getState) => {
  try {
    dispatch({
      type: NEWSLETTER_REQUEST,
    });

    

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await api.post(
      "/newsletter",
      { email },
      config
    );

    dispatch({
      type: NEWSLETTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEWSLETTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
