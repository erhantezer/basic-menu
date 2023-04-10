import { createContext, useContext, useState } from "react";
import menus from "./helper/data";

const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext)
};

export const AppContextProvider = ({children}) => {
    const [menuItems, setMenuItems] = useState(menus);

    const value = { menuItems, setMenuItems };

    return (
            <AppContext.Provider value={value}>
                {children}
            </AppContext.Provider>
        )
};