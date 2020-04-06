export const addProduct = (item) => {
  return {
    type: "ADD_PRODUCT",
    payload: item,
  };
};

export const deleteProduct = (id) => {
  return {
    type: "DELETE_PRODUCT",
    payload: id,
  };
};

export const updateProduct = (item) => {
  return {
    type: "UPDATE_PRODUCT",
    payload: item,
  };
};
