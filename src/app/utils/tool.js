export const convertDate = (date) => {
  const day = new Date(date);
  return `${day.getUTCDate()}-${
    day.getUTCMonth() <= 8
      ? "0" + (day.getUTCMonth() + 1)
      : day.getUTCMonth() + 1
  }-${day.getUTCFullYear()}`;
};
