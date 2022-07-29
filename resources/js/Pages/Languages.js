import React, {useContext} from "react";
import { Link } from "@inertiajs/inertia-react";
import { LanguageContext } from "./LanguageContext";
import { languages } from "./language";


export default function Languages(props) {
    const {langState, changeLanguage} = useContext(LanguageContext);
    return(
        <>
        <h3 id="languages">{langState.langs}</h3><div className="languages">
            <ul className="languages">
                <Link onClick={() => changeLanguage(languages.en)}>
                    <li>English</li></Link>
                <Link onClick={() => changeLanguage(languages.hu)}>
                    <li>Magyar</li></Link>
                <Link onClick={() => changeLanguage(languages.de)}>
                    <li>Deutsch</li></Link>
            </ul>
        </div>
        </>
    );
}