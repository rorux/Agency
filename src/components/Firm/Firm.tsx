import React from "react";
import FirmContact from "../FirmContact";
import FirmInfo from "../FirmInfo";
import FirmPhotos from "../FirmPhotos";
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
      <FirmPhotos photos={company?.photos} updatedAt={company?.updatedAt} />
    </>
  );
};

export default Firm;
