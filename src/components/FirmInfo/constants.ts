export const formatDate = (date: Date): string => {
  let dd: string | number = date.getDate();
  if (dd < 10) dd = "0" + dd;

  let mm: string | number = date.getMonth() + 1;
  if (mm < 10) mm = "0" + mm;

  let yy: number = date.getFullYear();

  return `${dd}.${mm}.${yy}`;
};

export const wordFormatDate = (date: Date): string => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  // @ts-ignore
  return date.toLocaleString("ru", options);
};

const mapType = {
  agent: "Агент",
  contractor: "Подрядчик",
};

export const renderType = (type: Array<string>): string => {
  let result = type.reduce((str, current) => {
    // @ts-ignore
    return str + mapType[current] + ", ";
  }, "");
  return result.substring(0, result.length - 2);
};
