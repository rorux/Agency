import { Dispatch } from "react";
import { TCompaniesAction, companiesActionTypes } from "./types";
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
