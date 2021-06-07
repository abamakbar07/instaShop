import { createContext, useReducer } from "react";

export const ProductContext = createContext();

const initialState = {
  products: [],
  productDetail: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.data
      }
    case "SET_PRODUCT_DETAIL":
      return {
        ...state,
        productDetail: action.payload.productDetail
      };
    case "SET_DETAIL_IN_ALLPRODUK":
      var data = action.payload.detail
      var index = state.products.map(e => e.id).indexOf(data.id)
      state.products[index].tag = data.tag
      return {
        ...state,
      }
    case "CLEAR_PRODUCT_DETAIL":
      return {
        ...state,
        productDetail: null
      }
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
