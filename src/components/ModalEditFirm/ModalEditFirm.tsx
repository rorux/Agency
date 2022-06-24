import React from "react";
import "./modal.css";
import { TModalEditFirmProps } from "./types";

const ModalEditFirm: React.FC<TModalEditFirmProps> = ({
  active,
  setActive,
}) => {
  return (
    <div className="modal">
      <div className="modal__content"></div>
    </div>
  );
};

export default ModalEditFirm;
