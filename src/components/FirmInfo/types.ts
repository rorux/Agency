export type TFirmInfoProps = {
  name: string | undefined;
  contract: { no: string; issue_date: string } | undefined;
  businessEntity: string | undefined;
  type: Array<string> | undefined;
};
