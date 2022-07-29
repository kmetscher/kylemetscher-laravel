import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export const formatDate = (month, year) => {
    const {langState, changeLanguage} = useContext(LanguageContext);
    const options = { year: 'numeric', month: 'long' };
    const date = new Date(year, month);
    const formattedDate = date.toLocaleDateString(langState.locale, options);
    return formattedDate;
};
