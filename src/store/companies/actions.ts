import { Dispatch } from "react";
import { TCompaniesAction, companiesActionTypes, TCompanyEdit } from "./types";
import { token } from "../../assets/api";

export const getCompanyById =
  (id: string) => async (dispatch: Dispatch<TCompaniesAction>) => {
    try {
      dispatch({ type: companiesActionTypes.COMPANY_INIT });

      const uri = `http://135.181.35.61:2112/companies/${id}`;

      await fetch(uri, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((company) => {
          dispatch({
            type: companiesActionTypes.COMPANY_SUCCESS,
            payload: company,
          });
        });
    } catch (e) {
      dispatch({
        type: companiesActionTypes.COMPANY_ERROR,
        payload: "Ошибка при загрузке данных организации!",
      });
    }
  };

export const editCompanyById =
  (id: string | undefined, body: TCompanyEdit) =>
  async (dispatch: Dispatch<TCompaniesAction>) => {
    try {
      const uri = `http://135.181.35.61:2112/companies/${id}`;
      await fetch(uri, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((company) => {
          dispatch({
            type: companiesActionTypes.COMPANY_SUCCESS,
            payload: company,
          });
        });
    } catch (e) {
      dispatch({
        type: companiesActionTypes.COMPANY_ERROR,
        payload: "Ошибка при обновлении данных организации!",
      });
    }
  };

export const deleteCompanyById =
  (id: string | undefined) => async (dispatch: Dispatch<TCompaniesAction>) => {
    try {
      const uri = `http://135.181.35.61:2112/companies/${id}`;
      await fetch(uri, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => console.log(response));
    } catch (e) {
      dispatch({
        type: companiesActionTypes.COMPANY_ERROR,
        payload: "Ошибка при удалении организации!",
      });
    }
  };
