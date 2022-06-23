import React from "react";
import FirmContact from "../FirmContact";
import FirmInfo from "../FirmInfo";
import FirmPhoto from "../FirmPhoto";
import FirmTitle from "../FirmTitle";

const Firm = () => {
  return (
    <div className="firm">
      <FirmTitle />
      <FirmInfo />
      <FirmContact />
      <FirmPhoto />
    </div>
  );
};

export default Firm;
