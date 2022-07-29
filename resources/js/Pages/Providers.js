import React, {useContext, useState, useEffect} from "react"
import { ThemeContext } from "./ThemeContext";
import { themes } from "./themes";
import { LanguageContext } from "./LanguageContext"
import { languages } from "./language"
export default function Providers({children}) {

    /* Check for a user preference on brightness and language. 
    On first visit, these don't exist, so default to dark mode 
    for the theme, and use the navigator.language property to set
    language and place them in storage. */
    let storedTheme = JSON.parse(localStorage.getItem('theme'));
    storedTheme = storedTheme ? storedTheme : themes.dark;
    let storedLang = localStorage.getItem('lang');
    switch (storedLang) {
        case 'en-US': storedLang = languages.en;
        break;
        case 'de-DE': storedLang = languages.de;
        break;
        case 'hu-HU': storedLang = languages.hu;
        break;
        default: storedLang = navigator.language;
        switch (storedLang) {
            case storedLang.indexOf('en') === 0:
                storedLang = languages.en;
                break;
            case storedLang.indexOf('hu') === 0:
                storedLang = languages.hu;
                break;
            case storedLang.indexOf('de') === 0:
                storedLang = languages.de;
                break;
            default: storedLang = languages.en;
        }
    }

    /* Use the state hook to apply the appropriate language and theme
    contexts. */
    const [themeState, setThemeState] = useState(storedTheme);
    const [langState, setLangState] = useState(storedLang);

    /* Used by the Lightswitch component to update theme context state
    when a user changes the theme. */
    const toggleTheme = () => {
        setThemeState(themeState === themes.dark ? themes.light : themes.dark);
        document.body.style.backgroundColor = themeState.bgcolor;
    };

    /* Used by the Languages component to update language context state
    when a user chooses a different language. */
    const changeLanguage = (lang) => {
        setLangState(lang);
    }

    /* Local storage is a side effect, so make those API calls whenever
    context state is changed. This also sets local storage 
    immediately upon first visit. */
    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(themeState))
    }, [themeState]);
    /* cursed */
    document.body.style.backgroundColor = themeState.bgcolor;
    useEffect(() => {
        localStorage.setItem('lang', langState.locale)
    }, [langState]);

    /* Ah, yes, a return statement. */
    return (
        <LanguageContext.Provider value={{ langState, changeLanguage }}>
            <ThemeContext.Provider value={{ themeState, toggleTheme }}>
                {children}
            </ThemeContext.Provider>
        </LanguageContext.Provider>
    )
}