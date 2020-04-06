import { combineReducers } from "redux";

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.payload];
    case "DELETE_PRODUCT":
      return [...state].filter((el) => el.id != action.payload);
    case "UPDATE_PRODUCT":
      let itemToUpdate = state.find((el) => el.id === action.payload.id);
      Object.assign(itemToUpdate, action.payload);
      return [...state];

    default:
      return state;
  }
};

// let updatedItem = prevState.data.find((x) => x.id === id);
//       Object.assign(updatedItem, data);
//       return { data: prevState.data, updatedValue: "" };

export default combineReducers({
  products: productsReducer,
});
