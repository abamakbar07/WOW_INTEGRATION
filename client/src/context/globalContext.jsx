import { createContext, useReducer } from 'react'

export const AppContext = createContext();

const initialState = {
   loginStatus: true,
   isLogin: false,
   isAdmin: false,
   user: null,
   loading: true,
}

const reducer = (state, action) => {
   switch (action.type) {
         case "LOGIN_ADMIN":
            localStorage.setItem("token", action.payload.token);
            return {
               ...state,
               loginStatus: true,
               isLogin: false,
               isAdmin: true,
               user: {
                  id: action.payload.id,
                  email: action.payload.email,
                  fullname: action.payload.fullname,
                  isAdmin: action.payload.isAdmin,
                  profilImage: action.payload.profilImage
               },
               loading: false,
            };
         case "LOGIN_USER":
            localStorage.setItem("token", action.payload.token);
            return {
               ...state,
               loginStatus: true,
               isLogin: true,
               isAdmin: false,
               user: {
                  id: action.payload.id,
                  email: action.payload.email,
                  fullname: action.payload.fullname,
                  isAdmin: action.payload.isAdmin,
                  profilImage: action.payload.profilImage
               },
               loading: false,
            };
         case "ADMIN_LOADED":
            return {
               ...state,
               isAdmin: true,
               user: {
                  id: action.payload.id,
                  email: action.payload.email,
                  fullname: action.payload.fullname,
                  isAdmin: action.payload.isAdmin,
                  profilImage: action.payload.profilImage
               },
               loading: false,
            };
         case "USER_LOADED":
            return {
               ...state,
               isLogin: true,
               user: {
                  id: action.payload.id,
                  email: action.payload.email,
                  fullname: action.payload.fullname,
                  isAdmin: action.payload.isAdmin,
                  profilImage: action.payload.profilImage
               },
               loading: false,
            };
         case "ADD_BOOK_MODAL_OPEN":
            return {
               ...state,
               addBookModal: action.payload.addBookModal,
               addBookStatus: action.payload.addBookStatus,
            }
         case "ADD_BOOK_MODAL_CLOSE":
            return {
               ...state,
               addBookModal: action.payload.addBookModal,
               addBookStatus: action.payload.addBookStatus,
            }
         case "SUBSCRIBE_MODAL":
            return {
               ...state,
               subscribeModal: action.payload.subscribeModal
            }
         case "READ_MODAL":
            return {
               ...state,
               readModal: action.payload.readModal
            }
         case "AUTH_ERROR":
            console.log("Auth Error");
         case "LOGOUT":
            localStorage.removeItem("token");
            return {
               ...state,
               isLogin: false,
               isAdmin: false,
               user: {
                  id: "",
                  email: "",
                  fullname: "",
                  isAdmin: "",
                  profilImage: "",
               }
            }
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
