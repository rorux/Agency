import { IRootState } from "../types";

export const companiesSelector = (store: IRootState) => store.company;
