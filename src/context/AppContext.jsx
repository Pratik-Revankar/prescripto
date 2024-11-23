import { createContext } from "react";
import { doctors } from "../../public/assets";
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const store = {
    doctors,
  };
  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
