import {
  NEWSLETTER_FAIL,
  NEWSLETTER_REQUEST,
    NEWSLETTER_SUCCESS,
    SEND_MESSAGE_FAIL,
    SEND_MESSAGE_REQUEST,
    SEND_MESSAGE_SUCCESS
   
  } from "../constant/types";
  
  export const sendMessageReducer = (state = {}, action) => {
    switch (action.type) {
      case SEND_MESSAGE_REQUEST:
        return { loading: true };
      case SEND_MESSAGE_SUCCESS:
        return { loading: false, message: action.payload };
      case SEND_MESSAGE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const NewsletterReducer = (state = {}, action) => {
    switch (action.type) {
      case NEWSLETTER_REQUEST:
        return { loading: true };
      case NEWSLETTER_SUCCESS:
        return { loading: false, newsletter: action.payload };
      case NEWSLETTER_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
