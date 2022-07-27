import React, { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { themes } from "./themes";

const Lightswitch = () => {
    const {themeState, toggleTheme} = useContext(ThemeContext);
    return(
        <label id="darkmode">
            <input type="checkbox" 
            readOnly
            onClick={() => toggleTheme()} 
            checked={themeState.checked} />
            <span className={themeState.switchclass}></span>   
        </label>
    );
    /*return(
        <div className={theme.switchclass} onClick={theme.toggleTheme}>
        </div>
    );*/
}

export default Lightswitch;