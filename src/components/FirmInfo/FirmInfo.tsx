import React, { useEffect } from "react";
import { TFirmInfoProps } from "./types";
import { formatDate, renderType } from "./constants";
import ModalEditFirm from "../ModalEditFirm";
import "./info.scss";

const FirmInfo: React.FC<TFirmInfoProps> = ({
  name,
  contract,
  businessEntity,
  type,
}) => {
  const [convertedDate, setConvertedDate] = React.useState("");
  const [renderedType, setRenderedType] = React.useState("");
  const [modalEditFirmActive, setModalEditFirmActive] = React.useState(true);

  useEffect(() => {
    if (contract?.issue_date) {
      const date = formatDate(new Date(contract?.issue_date));
      setConvertedDate(date);
    }
  }, [contract?.issue_date]);

  useEffect(() => {
    if (type) {
      setRenderedType(renderType(type));
    }
  }, [type]);

  return (
    <section className="info">
      <ModalEditFirm
        active={modalEditFirmActive}
        setActive={setModalEditFirmActive}
      />
      <div className="row row-subtitle">
        <span className="subtitle">Общая информация</span>
        &nbsp;&nbsp;&nbsp;
        <span className="btn green-btn">
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.3425 0.590673C13.0259 -0.0927446 14.134 -0.0927452 14.8174 0.590672L16.5282 2.30146C17.2116 2.98488 17.2116 4.09291 16.5282 4.77633L5.19018 16.1143C5.04953 16.255 4.85876 16.334 4.65985 16.334L1.53485 16.334C1.12064 16.334 0.784851 15.9982 0.784851 15.584L0.784851 12.459C0.784851 12.2601 0.863869 12.0693 1.00452 11.9287L12.3425 0.590673ZM13.7567 1.65133C13.6591 1.5537 13.5008 1.5537 13.4032 1.65133L2.28485 12.7696L2.28485 14.834L4.34919 14.834L15.4675 3.71567C15.5651 3.61804 15.5651 3.45975 15.4675 3.36212L13.7567 1.65133Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.79322 15.1555L1.96479 12.3271L3.02545 11.2664L5.85388 14.0949L4.79322 15.1555Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.9856 5.96314L11.1572 3.13471L12.2178 2.07405L15.0463 4.90248L13.9856 5.96314Z"
            />
          </svg>
        </span>
      </div>
      <div className="row row-paragraph">
        <span className="info__param">Полное название:</span>
        <span className="info__text">{name}</span>
      </div>
      <div className="row row-paragraph">
        <span className="info__param">Договор:</span>
        <span className="info__text">
          {contract?.no} от {convertedDate}
        </span>
      </div>
      <div className="row row-paragraph">
        <span className="info__param">Форма:</span>
        <span className="info__text">{businessEntity}</span>
      </div>
      <div className="row row-paragraph">
        <span className="info__param">Тип:</span>
        <span className="info__text">{renderedType}</span>
      </div>
    </section>
  );
};

export default FirmInfo;
