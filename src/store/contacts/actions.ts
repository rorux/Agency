import { Dispatch } from "react";
import { TContactsAction, contactsActionTypes, TContactEdit } from "./types";
import { token } from "../../assets/api";

export const getContactById =
  (id: string) => async (dispatch: Dispatch<TContactsAction>) => {
    try {
      dispatch({ type: contactsActionTypes.CONTACT_INIT });

      const uri = `http://135.181.35.61:2112/contacts/${id}`;

      await fetch(uri, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((contact) => {
          dispatch({
            type: contactsActionTypes.CONTACT_SUCCESS,
            payload: contact,
          });
        });
    } catch (e) {
      dispatch({
        type: contactsActionTypes.CONTACT_ERROR,
        payload: "Ошибка при загрузке контактных данных!",
      });
    }
  };

export const editContactById =
  (id: string | undefined, body: TContactEdit) =>
  async (dispatch: Dispatch<TContactsAction>) => {
    try {
      const uri = `http://135.181.35.61:2112/contacts/${id}`;
      await fetch(uri, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((contact) => {
          dispatch({
            type: contactsActionTypes.CONTACT_SUCCESS,
            payload: contact,
          });
        });
    } catch (e) {
      dispatch({
        type: contactsActionTypes.CONTACT_ERROR,
        payload: "Ошибка при обновлении контактных данных!",
      });
    }
  };
