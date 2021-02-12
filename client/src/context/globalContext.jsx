import { createContext, useReducer } from 'react'

export const AppContext = createContext();

const initialState = {
   isLogin: true,
   isAdmin: false,
   title: 'ubah',
}

const reducer = (state, action) => {
   switch (action.type) {
         case "LOGIN_SUCCESS_ADMIN":
            return {
            ...state,
            isLogin: true,
            isAdmin: true,
            };
         case "LOGIN_SUCCESS_USER":
            return {
            ...state,
            isLogin: true,
            isAdmin: false,
            };
         case "LOGIN_FAILED":
            return {
            ...state,
            isLogin: false,
            isAdmin: false,
            };
         default:
            throw new Error();
   }
};

export const AppContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);

   return (
      <AppContext.Provider value={[state, dispatch]}>
         { children }
      </AppContext.Provider>
   )
}
