import React, { useContext, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import { ThemeContext } from "./ThemeContext";

const Lightswitch = () => {
    const {themeState, toggleTheme} = useContext(ThemeContext);
    const {langState, changeLanguage} = useContext(LanguageContext);
    return(
        <>
        <h3 id="brightness">{langState.brightness}</h3><label id="darkmode">
            <input type="checkbox"
                readOnly
                onClick={() => toggleTheme()}
                checked={themeState.checked} />
            <span className={themeState.switchclass}></span>
        </label>
        </>
    );
}

export default Lightswitch;