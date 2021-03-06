import { createContext, useReducer } from "react";

export const BookContext = createContext();

const initialState = {
  bookDetailId: 1,
};

const reducer = (state, action) => {
   switch (action.type) {
      case "SET_BOOK_DETAIL":
         return {
            ...state,
            bookDetailId: action.payload,
         };
      case "RESET_BOOK_DETAIL":
         return {
            ...state,
            bookDetailId: "",
         };
      default:
         throw new Error();
   }
};

export const BookContextProvider = ({ children }) => {
  const [stateBook, dispatchBook] = useReducer(reducer, initialState);

  return (
    <BookContext.Provider value={[stateBook, dispatchBook]}>
      {children}
    </BookContext.Provider>
  );
};
