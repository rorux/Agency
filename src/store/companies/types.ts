export type TCompanyPhoto = {
  name: string;
  filepath: string;
  thumbpath: string;
};

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
  photos: Array<TCompanyPhoto>;
  createdAt: string;
  updatedAt: string;
};

export type TCompanyEdit = {
  name?: string;
  shortName?: string;
  businessEntity?: string;
  contract?: {
    no?: string;
    issue_date?: string | undefined;
  };
  type?: Array<string> | undefined;
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
  COMPANY_ADD_PICTURE = "COMPANY::ADD_PICTURE",
  COMPANY_DEL_PICTURE = "COMPANY::DEL_PICTURE",
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

interface ICompaniesAddPictureAction {
  type: companiesActionTypes.COMPANY_ADD_PICTURE;
  payload: TCompanyPhoto;
}

interface ICompaniesDelPictureAction {
  type: companiesActionTypes.COMPANY_DEL_PICTURE;
  payload: string | undefined;
}

export type TCompaniesAction =
  | ICompaniesInitAction
  | ICompaniesSuccessAction
  | ICompaniesErrorAction
  | ICompaniesAddPictureAction
  | ICompaniesDelPictureAction;
