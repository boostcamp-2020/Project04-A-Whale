const getFormatDate = (date) => {
  const year = date.getFullYear();
  let month = 1 + date.getMonth();
  month = month >= 10 ? month : `0${month}`;
  let day = date.getDate(); // d
  day = day >= 10 ? day : `0${day}`;
  return `${year}-${month}-${day}`;
};

export default getFormatDate;
