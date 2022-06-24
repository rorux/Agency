export type TCompany = {
  id: string;
  contactId: string;
  name: string;
  shortName: string;
  businessEntity: string;
  contract: {
    no: string;
    issue_date: string;
  };
  type: Array<string>;
  status: string;
  photos: Array<{
    name: string;
    filepath: string;
    thumbpath: string;
  }>;
  createdAt: string;
  updatedAt: string;
};

export interface ICompaniesState {
  company: TCompany | null;
  loading: boolean;
  error: null | string;
}

export enum companiesActionTypes {
  COMPANY_INIT = "COMPANY::INIT",
  COMPANY_ERROR = "COMPANY::ERROR",
  COMPANY_SUCCESS = "COMPANY::SUCCESS",
  COMPANY_DELETE = "COMPANY::DELETE",
}

interface ICompaniesInitAction {
  type: companiesActionTypes.COMPANY_INIT;
}

interface ICompaniesSuccessAction {
  type: companiesActionTypes.COMPANY_SUCCESS;
  payload: TCompany;
}

interface ICompaniesErrorAction {
  type: companiesActionTypes.COMPANY_ERROR;
  payload: string;
}

export type TCompaniesAction =
  | ICompaniesInitAction
  | ICompaniesSuccessAction
  | ICompaniesErrorAction;