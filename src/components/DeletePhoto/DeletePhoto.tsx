import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { companiesSelector } from "../../store/companies/selectors";
import { deletePhoto } from "../../store/companies/actions";
import { TDeletePhotoProps } from "./types";

const DeletePhoto: React.FC<TDeletePhotoProps> = ({ setActive, img }) => {
  const { company } = useSelector(companiesSelector);
  const dispatch = useDispatch();

  const deleteCompany = useCallback(() => {
    dispatch(deletePhoto(company?.id, img));
    setActive(false);
  }, [dispatch, setActive, company, img]);

  return (
    <div className="card">
      <span className="title">Удалить изображение</span>
      <p>Отправить изображение в архив?</p>
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

export default DeletePhoto;
