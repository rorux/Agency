export type TContact = {
  id: string;
  lastname: string;
  firstname: string;
  patronymic: string;
  phone: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export interface IContactsState {
  contact: TContact | null;
  loading: boolean;
  error: null | string;
}

export enum contactsActionTypes {
  CONTACT_INIT = "CONTACT::INIT",
  CONTACT_ERROR = "CONTACT::ERROR",
  CONTACT_SUCCESS = "CONTACT::SUCCESS",
  CONTACT_DELETE = "CONTACT::DELETE",
}

interface IContactsInitAction {
  type: contactsActionTypes.CONTACT_INIT;
}

interface IContactsSuccessAction {
  type: contactsActionTypes.CONTACT_SUCCESS;
  payload: TContact;
}

interface IContactsErrorAction {
  type: contactsActionTypes.CONTACT_ERROR;
  payload: string;
}

export type TContactsAction =
  | IContactsInitAction
  | IContactsSuccessAction
  | IContactsErrorAction;
