import React, { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { themes } from "./themes";

const Lightswitch = () => {
    const {themeState, toggleTheme} = useContext(ThemeContext);
    return(
        <>
        <h3 id="brightness">Brightness</h3><label id="darkmode">
            <input type="checkbox"
                readOnly
                onClick={() => toggleTheme()}
                checked={themeState.checked} />
            <span className={themeState.switchclass}></span>
        </label>
        </>
    );
    /*return(
        <div className={theme.switchclass} onClick={theme.toggleTheme}>
        </div>
    );*/
}

export default Lightswitch;