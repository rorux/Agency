import React, { useEffect } from "react";
import { TFirmPhotosProps } from "./types";
import { wordFormatDate } from "../FirmInfo/constants";
import FirmPhoto from "../FirmPhoto/FirmPhoto";
import AddPhotoButton from "../AddPhotoButton";
import "./photo.scss";

const FirmPhotos: React.FC<TFirmPhotosProps> = ({ photos, updatedAt }) => {
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
        {photos !== undefined && !photos.length ? (
          <span className="info__param">Нет изображений</span>
        ) : (
          photos?.map((photo) => (
            <FirmPhoto
              photo={photo}
              date={convertedUpdatedAt}
              key={photo.name}
            />
          ))
        )}
      </div>
      <div className="row row-paragraph">
        <AddPhotoButton />
      </div>
    </section>
  );
};

export default FirmPhotos;
