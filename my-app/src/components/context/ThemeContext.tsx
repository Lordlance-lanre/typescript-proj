import { createContext, ReactNode } from "react";
import { Theme } from "./Theme";

type themeContextProp = {
    children: ReactNode
}

export const ThemeContext = createContext(Theme);

const ThemeContextProvider = ({ children }: themeContextProp) => {
return(
    <ThemeContext.Provider value={Theme}>
        {children}
    </ThemeContext.Provider>
)
}

export default ThemeContextProvider;