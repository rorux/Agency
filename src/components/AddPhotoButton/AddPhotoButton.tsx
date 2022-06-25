import React from "react";
import { useDispatch } from "react-redux";
import { addPhoto } from "../../store/companies/actions";

const AddPhotoButton: React.FC = () => {
  const dispatch = useDispatch();

  const imgLoading = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event?.target.files) {
      const data = new FormData();
      data.append("file", event?.target.files[0]);
      dispatch(addPhoto(data));
    }
  };

  return (
    <div className="input__wrapper">
      <input
        name="file"
        type="file"
        id="input__file"
        className="input__file"
        multiple
        onChange={imgLoading}
      />
      <label
        htmlFor="input__file"
        className="button green-button input__file-buttonn"
      >
        <span className="input__file-icon-wrapper">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.900024 6.99999C0.900024 6.66862 1.16865 6.39999 1.50002 6.39999H12.5C12.8314 6.39999 13.1 6.66862 13.1 6.99999C13.1 7.33136 12.8314 7.59999 12.5 7.59999H1.50002C1.16865 7.59999 0.900024 7.33136 0.900024 6.99999Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.00002 0.899994C7.3314 0.899994 7.60002 1.16862 7.60002 1.49999V12.5C7.60002 12.8314 7.3314 13.1 7.00002 13.1C6.66865 13.1 6.40002 12.8314 6.40002 12.5V1.49999C6.40002 1.16862 6.66865 0.899994 7.00002 0.899994Z"
            />
          </svg>
        </span>
        <span className="input__file-button-text">Добавить изображение</span>
      </label>
    </div>
  );
};

export default AddPhotoButton;
