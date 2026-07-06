export const formatCurrency = (value) => {
  return `$${value}`;
};

export const capitalize = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const filterBySearch = (data, key, search) => {
  return data.filter((item) =>
    item[key].toLowerCase().includes(search.toLowerCase())
  );
};