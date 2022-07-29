import React, {useContext} from "react";
import {LanguageContext} from "./LanguageContext"

export default function Published(props) {
    const {langState, changeLanguage} = useContext(LanguageContext);
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    let date = new Date(props.date);
    date = date.toLocaleDateString(langState.locale, options);
    let pubdateContent;
    switch (langState.locale) {
        case 'en-US':
        case 'de-DE':
            pubdateContent = `${langState.published} ${date}`;
            break;
        case 'hu-HU':
            pubdateContent = `${date}${langState.published}`;
            break;
    }
    return(
        <div className="pubdatebox">
            <p>{pubdateContent}</p>
        </div>
    );
    /* 
    return(
        <div className="pubdatebox">
            <p className="pubdate">{lang.published} {date}</p>
        </div>
    );
    */
}