import React from "react";
import FirmContact from "../FirmContact";
import FirmInfo from "../FirmInfo";
import FirmPhoto from "../FirmPhoto";
import FirmTitle from "../FirmTitle";
import { TFirmProps } from "./types";

const Firm: React.FC<TFirmProps> = ({ company, contact }) => {
  return (
    <>
      <FirmTitle title={company?.shortName} />
      <FirmInfo
        name={company?.name}
        contract={company?.contract}
        businessEntity={company?.businessEntity}
        type={company?.type}
      />
      <FirmContact
        lastname={contact?.lastname}
        firstname={contact?.firstname}
        patronymic={contact?.patronymic}
        phone={contact?.phone}
        email={contact?.email}
      />
      <FirmPhoto photos={company?.photos} updatedAt={company?.updatedAt} />
    </>
  );
};

export default Firm;
