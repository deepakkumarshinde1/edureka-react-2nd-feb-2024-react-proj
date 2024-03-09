let BASE_URL = process.env.REACT_APP_API_URL;
export const getProductCategoriesService = async () => {
  console.log("service");
  let url = `${BASE_URL}/categories`;
  let options = {
    method: "GET",
  };
  const response = await fetch(url, options);
  return response.json();
};

export const getProductDataService = async (cat_name) => {
  cat_name = cat_name.replaceAll("-", " ");
  const url = `${BASE_URL}/products?category=${cat_name}`;
  const options = {
    method: "GET",
  };
  let response = await fetch(url, options);
  return response.json();
};
