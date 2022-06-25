import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { companiesSelector } from "../../store/companies/selectors";
import { deleteCompanyById } from "../../store/companies/actions";
import { TDeleteFirmProps } from "./types";
import "./card.scss";

const DeleteFirm: React.FC<TDeleteFirmProps> = ({ setActive }) => {
  const { company } = useSelector(companiesSelector);
  const dispatch = useDispatch();

  const deleteCompany = useCallback(() => {
    dispatch(deleteCompanyById(company?.id));
    setActive(false);
  }, [dispatch, setActive, company]);

  return (
    <div className="card">
      <span className="title">Удалить карточку</span>
      <p>Отправить карточку организации в архив?</p>
      <div className="card__bottom">
        <span
          className="card__cancel grey-button"
          onClick={() => setActive(false)}
        >
          Отмена
        </span>
        <span className="card__submit green-button" onClick={deleteCompany}>
          Удалить
        </span>
      </div>
    </div>
  );
};

export default DeleteFirm;
