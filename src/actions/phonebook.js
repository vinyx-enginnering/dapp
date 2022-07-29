import api from "../util/api";
import {
  PHONEBOOK_CREATE_FAIL,
  PHONEBOOK_CREATE_REQUEST,
  PHONEBOOK_CREATE_SUCCESS,
  PHONEBOOK_GET_FAIL,
  PHONEBOOK_GET_REQUEST,
  PHONEBOOK_GET_SUCCESS,
  PHONEBOOK_DELETE_FAIL,
  PHONEBOOK_DELETE_REQUEST,
  PHONEBOOK_DELETE_SUCCESS
} from "../constant/types.js";

// create new phonebook
export const makePhonebook = (title, numbers) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PHONEBOOK_CREATE_REQUEST,
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
      "/phonebook/create",
      { title, numbers },
      config
    );

    dispatch({
      type: PHONEBOOK_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PHONEBOOK_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// fetch existing phonebook
export const getPhonebooks = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PHONEBOOK_GET_REQUEST,
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

    const { data } = await api.get("/phonebook", config);

    dispatch({
      type: PHONEBOOK_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PHONEBOOK_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


// delete existing phonebook
export const deletePhonebook = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PHONEBOOK_DELETE_REQUEST,
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

    const { data } = await api.delete(`/phonebook/${id}`, config);

    dispatch({
      type: PHONEBOOK_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PHONEBOOK_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
