import { Dispatch } from "react";
import { TCompaniesAction, companiesActionTypes, TCompanyEdit } from "./types";
import axios from "axios";

export const getCompanyById =
  (id: string) => async (dispatch: Dispatch<TCompaniesAction>) => {
    try {
      dispatch({ type: companiesActionTypes.COMPANY_INIT });

      const uri = `${process.env.REACT_APP_API}/companies/${id}`;

      await fetch(uri, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
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
      const uri = `${process.env.REACT_APP_API}/companies/${id}`;
      await fetch(uri, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
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
      const uri = `${process.env.REACT_APP_API}/companies/${id}`;
      await fetch(uri, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
      }).then((response) => console.log("response.status:", response.status));
    } catch (e) {
      dispatch({
        type: companiesActionTypes.COMPANY_ERROR,
        payload: "Ошибка при удалении организации!",
      });
    }
  };

export const addPhoto =
  (data: FormData) => async (dispatch: Dispatch<TCompaniesAction>) => {
    try {
      await axios
        .post(`${process.env.REACT_APP_API}/companies/12/image`, data, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          },
        })
        .then((response) => {
          dispatch({
            type: companiesActionTypes.COMPANY_ADD_PICTURE,
            payload: response.data,
          });
        });
    } catch (e) {
      dispatch({
        type: companiesActionTypes.COMPANY_ERROR,
        payload: "Ошибка при добавлении изображения!",
      });
    }
  };

export const deletePhoto =
  (id: string | undefined, img: string | undefined) =>
  async (dispatch: Dispatch<TCompaniesAction>) => {
    try {
      const uri = `${process.env.REACT_APP_API}/companies/${id}/image/${img}`;
      await fetch(uri, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
      }).then((response) => {
        console.log("response.status:", response.status);
        dispatch({
          type: companiesActionTypes.COMPANY_DEL_PICTURE,
          payload: img,
        });
      });
    } catch (e) {
      dispatch({
        type: companiesActionTypes.COMPANY_ERROR,
        payload: "Ошибка при удалении организации!",
      });
    }
  };
