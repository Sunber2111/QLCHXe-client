export const convertDate = (date) => {
  const day = new Date(date);
  return `${day.getUTCDate()+1}-${
    day.getUTCMonth() <= 8
      ? "0" + (day.getUTCMonth() + 1)
      : day.getUTCMonth() + 1
  }-${day.getUTCFullYear()}`;
};

export const convertToPrice = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
