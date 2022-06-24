import {
  ICompaniesState,
  TCompaniesAction,
  companiesActionTypes,
} from "./types";

const initialState: ICompaniesState = {
  company: null,
  loading: false,
  error: null,
};

export const companyReducer = (
  state = initialState,
  action: TCompaniesAction
) => {
  switch (action.type) {
    case companiesActionTypes.COMPANY_INIT:
      return {
        ...state,
        loading: true,
      };
    case companiesActionTypes.COMPANY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case companiesActionTypes.COMPANY_SUCCESS:
      return {
        ...state,
        company: action.payload,
        loading: false,
      };
    default: {
      return state;
    }
  }
};
