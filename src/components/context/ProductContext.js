import { createContext, useReducer } from "react";

export const ProductContext = createContext();

const initialState = {
  pagination: {
    offset: 0,
    tableData: [],
    orgtableData: [],
    perPage: 3,
    currentPage: 0,
  },
  products: [],
  productDetail: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCT_DETAIL":
      return {
        ...state,
        productDetail: action.payload.productDetail
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
