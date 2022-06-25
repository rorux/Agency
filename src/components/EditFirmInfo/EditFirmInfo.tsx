import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { companiesSelector } from "../../store/companies/selectors";
import { editCompanyById } from "../../store/companies/actions";
import { TEditFirmInfoProps } from "./types";
import "./form.scss";

const EditFirmInfo: React.FC<TEditFirmInfoProps> = ({ setActive }) => {
  const { company } = useSelector(companiesSelector);
  const [name, setName] = React.useState("");
  const [businessEntity, setBusinessEntity] = React.useState("");
  const [contractNo, setContractNo] = React.useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (company) {
      setName(company?.name);
      setBusinessEntity(company?.businessEntity);
      setContractNo(company?.contract.no);
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
        name,
        businessEntity,
        contract: { no: contractNo },
      })
    );
    setActive(false);
  }, [dispatch, setActive, name, businessEntity, contractNo, company]);

  return (
    <div className="form">
      <span className="title form__title">Обновление данных организации</span>

      <div className="form__group">
        <input
          type="text"
          className="form__input"
          id="name"
          placeholder=" "
          value={name}
          onChange={(event) => handleInputChange(event, setName)}
        />
        <label htmlFor="name" className="form__label">
          Полное название
        </label>
      </div>

      <div className="form__group">
        <input
          type="text"
          className="form__input"
          id="businessEntity"
          placeholder=" "
          value={businessEntity}
          onChange={(event) => handleInputChange(event, setBusinessEntity)}
        />
        <label htmlFor="businessEntity" className="form__label">
          Форма
        </label>
      </div>

      <div className="form__group">
        <input
          type="text"
          className="form__input"
          id="contractNo"
          placeholder=" "
          value={contractNo}
          onChange={(event) => handleInputChange(event, setContractNo)}
        />
        <label htmlFor="contractNo" className="form__label">
          Номер договора
        </label>
      </div>

      <button onClick={editSubmit} className="form__button button green-button">
        Обновить данные
      </button>
    </div>
  );
};

export default EditFirmInfo;
