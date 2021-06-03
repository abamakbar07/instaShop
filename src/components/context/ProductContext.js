import { createContext, useReducer } from "react";

export const ProductContext = createContext();

const initialState = {
  data: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "PRODUCT":
      return {
        ...state,
        data: action.payload.data
      };
    default:
      throw new Error();
  }
};

export const ProductContextProvider = ({ children }) => {
  const [product, dispatchProduct] = useReducer(reducer, initialState);

  return (
    <ProductContext.Provider value={[product, dispatchProduct]}>
      {children}
    </ProductContext.Provider>
  );
};
