import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { Link } from "@inertiajs/inertia-react";

export default function ErrorMessage(props) {
    const { langState, changeLanguage } = useContext(LanguageContext);
    return (
        <>
    <h2>{langState.error}</h2>
    <p><Link href='/'>{langState.backhome}</Link></p>
    </>
    );
}