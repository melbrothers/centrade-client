import api from "../../src/api";

export const getSuppliersData = () => {
  const saveQuoteUrl = "/api/suppliers";
  return api.get(saveQuoteUrl);
};
