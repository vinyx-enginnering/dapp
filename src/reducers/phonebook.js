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
} from "../constant/types";

export const createPhonebookReducer = (state = {}, action) => {
  switch (action.type) {
    case PHONEBOOK_CREATE_REQUEST:
      return { loading: true };
    case PHONEBOOK_CREATE_SUCCESS:
      return { loading: false, contact: action.payload };
    case PHONEBOOK_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const fetchPhonebookReducer = (state = [], action) => {
  switch (action.type) {
    case PHONEBOOK_GET_REQUEST:
      return { loading: true };
    case PHONEBOOK_GET_SUCCESS:
      return { loading: false, contacts: action.payload };
    case PHONEBOOK_GET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const removePhonebookReducer = (state = {}, action) => {
  switch (action.type) {
    case PHONEBOOK_DELETE_REQUEST:
      return { loading: true };
    case PHONEBOOK_DELETE_SUCCESS:
      return { loading: false, contact: action.payload };
    case PHONEBOOK_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
