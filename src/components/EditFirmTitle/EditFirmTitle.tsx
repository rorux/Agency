import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { companiesSelector } from "../../store/companies/selectors";
import { editCompanyById } from "../../store/companies/actions";
import { TEditFirmTitleProps } from "./types";

const EditFirmTitle: React.FC<TEditFirmTitleProps> = ({ setActive }) => {
  const { company } = useSelector(companiesSelector);
  const [shortName, setShortName] = React.useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (company) {
      setShortName(company?.shortName);
    }
  }, [company]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(event?.target.value as string);
  };

  const editSubmit = useCallback(() => {
    dispatch(
      editCompanyById(company?.id, {
        shortName,
      })
    );
    setActive(false);
  }, [dispatch, setActive, shortName, company]);

  return (
    <div className="form">
      <span className="title form__title">Обновление названия организации</span>

      <div className="form__group">
        <input
          type="text"
          className="form__input"
          id="name"
          placeholder=" "
          value={shortName}
          onChange={(event) => handleInputChange(event, setShortName)}
        />
        <label htmlFor="name" className="form__label">
          Краткое название
        </label>
      </div>

      <button onClick={editSubmit} className="form__button button green-button">
        Обновить данные
      </button>
    </div>
  );
};

export default EditFirmTitle;
