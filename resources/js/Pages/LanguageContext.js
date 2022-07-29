import React from "react";
import { languages } from "./language";

export const LanguageContext = React.createContext({
    language: languages.en,
    changeLanguage: (lang) => {},
});