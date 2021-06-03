import { createContext, useReducer } from "react";

export const ProductDetailContext = createContext();

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

export const ProductDetailContextProvider = ({ children }) => {
  const [product, dispatchProduct] = useReducer(reducer, initialState);

  return (
    <ProductDetailContext.Provider value={[product, dispatchProduct]}>
      {children}
    </ProductDetailContext.Provider>
  );
};
