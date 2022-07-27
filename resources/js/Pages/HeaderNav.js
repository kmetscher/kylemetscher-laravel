import React, {useContext} from "react";
import { Link } from '@inertiajs/inertia-react';
import { ThemeContext } from "./ThemeContext";

export default function HeaderNav(props) {
    const {themeState, toggleTheme} = useContext(ThemeContext);
    return(
        <header>
            <header className={themeState.headerclass}>
                <h1>KYLE METSCHER</h1>
            </header>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}