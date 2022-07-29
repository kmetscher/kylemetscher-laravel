import React, {useContext} from "react";
import { Link } from '@inertiajs/inertia-react';
import { ThemeContext } from "./ThemeContext";
import { LanguageContext } from "./LanguageContext";

export default function HeaderNav(props) {
    const {themeState, toggleTheme} = useContext(ThemeContext);
    const {langState, changeLanguage} = useContext(LanguageContext);
    return(
        <header>
            <header className={themeState.headerclass}>
                <h1>KYLE METSCHER</h1>
            </header>
            <nav>
                <ul>
                    <li><Link href="/">{langState.home}</Link></li>
                    <li><Link href="/about">{langState.about}</Link></li>
                    <li><Link href="/contact">{langState.contact}</Link></li>
                </ul>
            </nav>
        </header>
    );
}