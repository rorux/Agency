import { ICompaniesState } from "./companies/types";
import { IContactsState } from "./contacts/types";

export interface IRootState {
  company: ICompaniesState;
  contact: IContactsState;
}
