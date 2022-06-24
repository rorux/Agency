import React, { useEffect } from "react";
import { TFirmPhotoProps } from "./types";
import { wordFormatDate } from "../FirmInfo/constants";
import "./photo.scss";

const FirmPhoto: React.FC<TFirmPhotoProps> = ({ photos, updatedAt }) => {
  const [convertedUpdatedAt, setConvertedUpdatedAt] = React.useState("");

  useEffect(() => {
    if (updatedAt) {
      const date = wordFormatDate(new Date(updatedAt));
      setConvertedUpdatedAt(date);
    }
  }, [updatedAt]);

  return (
    <section className="info">
      <div className="row row-subtitle">
        <span className="subtitle">Приложенные фото</span>
      </div>
      <div className="row row-paragraph">
        {photos?.map((photo) => (
          <div className="photo" key={photo.name}>
            <img
              className="photo__picture"
              src={photo.thumbpath}
              width="160"
              height="160"
              alt="Первое фото"
            />
            <span className="photo__name">{photo.name}</span>
            <span className="photo__date">{convertedUpdatedAt}</span>
            <span className="photo__delete">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="20" height="20" rx="10" fill="#D95151" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.19995 6.07226L9.1277 10L5.19995 13.9278L6.0722 14.8L9.99995 10.8723L13.9277 14.8L14.8 13.9278L10.8722 10L14.8 6.07226L13.9277 5.20001L9.99995 9.12776L6.0722 5.20001L5.19995 6.07226Z"
                  fill="#F7F7F7"
                />
              </svg>
            </span>
          </div>
        ))}
      </div>
      <div className="row row-paragraph">
        <button className="button green-button">
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
          Добавить изображение
        </button>
      </div>
    </section>
  );
};

export default FirmPhoto;
