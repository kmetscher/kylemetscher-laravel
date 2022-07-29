import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import ReactMarkdown from "react-markdown";

export default function AboutContent(props) {
    const {langState, changeLanguage} = useContext(LanguageContext);
    let markdown
    switch (langState.locale) {
        case 'en-EN': markdown = abouten; break;
        case 'hu-HU': markdown = abouthu; break;
        case 'de-DE': markdown = aboutde; break;
    }
    return (
        <ReactMarkdown>
            {langState.aboutmd}
        </ReactMarkdown>
    )
}