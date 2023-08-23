import { createContext, useState } from "react";
import LANGUAGE from "../utils/constants";

// Create initial empty context
const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {

    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
export { AppContext };
