import { createContext } from "react";

export const AppContext = createContext();


  const ContextProvider = (props ) => {
  const username = 'username';
   const phone = '+91 1234567890';

  return (
    <AppContext.Provider value={{username,phone}}>
      {props.children}
    </AppContext.Provider>
  );
}

export default ContextProvider;
// This code creates a context using React's createContext function and exports it.
// The ContextProvider component wraps its children with the AppContext.Provider, providing a phone number value to the context.