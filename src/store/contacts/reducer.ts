import { IContactsState, TContactsAction, contactsActionTypes } from "./types";

const initialState: IContactsState = {
  contact: null,
  loading: false,
  error: null,
};

export const contactReducer = (
  state = initialState,
  action: TContactsAction
) => {
  switch (action.type) {
    case contactsActionTypes.CONTACT_INIT:
      return {
        ...state,
        loading: true,
      };
    case contactsActionTypes.CONTACT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case contactsActionTypes.CONTACT_SUCCESS:
      return {
        ...state,
        contact: action.payload,
        loading: false,
      };
    default: {
      return state;
    }
  }
};
