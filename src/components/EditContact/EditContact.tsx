import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactsSelector } from "../../store/contacts/selectors";
import { editContactById } from "../../store/contacts/actions";
import { TEditContactProps } from "./types";

const EditContact: React.FC<TEditContactProps> = ({ setActive }) => {
  const { contact } = useSelector(contactsSelector);
  const [lastname, setLastname] = React.useState("");
  const [firstname, setFirstname] = React.useState("");
  const [patronymic, setPatronymic] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (contact) {
      setLastname(contact?.lastname);
      setFirstname(contact?.firstname);
      setPatronymic(contact?.patronymic);
      setPhone(contact?.phone);
      setEmail(contact?.email);
    }
  }, [contact]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(event?.target.value as string);
  };

  const editSubmit = useCallback(() => {
    dispatch(
      editContactById(contact?.id, {
        lastname,
        firstname,
        patronymic,
        phone,
        email,
      })
    );
    setActive(false);
  }, [
    dispatch,
    setActive,
    lastname,
    firstname,
    patronymic,
    phone,
    email,
    contact,
  ]);

  return (
    <div className="form">
      <span className="title form__title">Обновление контакта организации</span>

      <div className="form__group">
        <input
          type="text"
          className="form__input"
          id="lastname"
          placeholder=" "
          value={lastname}
          onChange={(event) => handleInputChange(event, setLastname)}
        />
        <label htmlFor="lastname" className="form__label">
          Фамилия
        </label>
      </div>

      <div className="form__group">
        <input
          type="text"
          className="form__input"
          id="firstname"
          placeholder=" "
          value={firstname}
          onChange={(event) => handleInputChange(event, setFirstname)}
        />
        <label htmlFor="firstname" className="form__label">
          Имя
        </label>
      </div>

      <div className="form__group">
        <input
          type="text"
          className="form__input"
          id="patronymic"
          placeholder=" "
          value={patronymic}
          onChange={(event) => handleInputChange(event, setPatronymic)}
        />
        <label htmlFor="patronymic" className="form__label">
          Отчество
        </label>
      </div>

      <div className="form__group">
        <input
          type="text"
          className="form__input"
          id="phone"
          placeholder=" "
          value={phone}
          onChange={(event) => handleInputChange(event, setPhone)}
        />
        <label htmlFor="phone" className="form__label">
          Отчество
        </label>
      </div>

      <div className="form__group">
        <input
          type="text"
          className="form__input"
          id="email"
          placeholder=" "
          value={email}
          onChange={(event) => handleInputChange(event, setEmail)}
          pattern="[0-9]{11}"
        />
        <label htmlFor="email" className="form__label">
          Отчество
        </label>
      </div>

      <button onClick={editSubmit} className="form__button button green-button">
        Обновить данные
      </button>
    </div>
  );
};

export default EditContact;
