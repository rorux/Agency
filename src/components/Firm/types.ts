import { TCompany } from "../../store/companies/types";
import { TContact } from "../../store/contacts/types";

export type TFirmProps = {
  company: TCompany | null;
  contact: TContact | null;
};
