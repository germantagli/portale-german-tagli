import { createContext, useState } from "react";
import LENGUAGE from "../utils/constants";

// Create initial empty context
const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {

    const [lenguage, setLenguage] = useState(LENGUAGE.Italy);

    return (
        <AppContext.Provider value={
            {
                lenguage: lenguage,
                setLenguage: setLenguage
            }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
export { AppContext };
