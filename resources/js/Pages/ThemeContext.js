import React, { useContext, useState } from "react";
import { themes } from "./themes";

export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {}
});