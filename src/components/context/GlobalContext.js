import { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialState = {
  context: "globalContext",
  instagramApp: {
    id: process.env.REACT_APP_INSTAGRAM_APP_ID,
    secret: process.env.REACT_APP_INSTAGRAM_APP_SECRET,
    redirectUri: process.env.REACT_APP_INSTAGRAM_APP_REDIRECT_URI,
    token: process.env.REACT_APP_INSTAGRAM_APP_TOKEN,
  },
  loginStatus: false,
  isLogin: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        loginStatus: true,
      };
    case "AUTH_ERROR":
    case "LOGIN_REQUEST":
      localStorage.setItem(
        "loginrequest_code",
        action.payload.loginRequest.code
      );
      return {
        ...state,
        loginRequest: action.payload.loginRequest,
      };
    case "SET_TOKEN":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      localStorage.removeItem("loginrequest_code");
      return {
        ...state,
        loginStatus: false,
        isLogin: false,
      };
    default:
      throw new Error();
  }
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};
