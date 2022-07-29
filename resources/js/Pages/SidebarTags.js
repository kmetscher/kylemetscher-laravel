import React, { useContext } from "react";
import { Link } from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/inertia-react";
import { LanguageContext } from "./LanguageContext";

export default function SidebarTags(props) {
    const {langState, changeLanguage} = useContext(LanguageContext);
    const allTags = usePage().props.alltags;
    const sidebarTags = allTags.map((sidebartag) =>
    <li key={sidebartag.id}>
        <Link href={'/tagged/' + sidebartag.id}>
            {sidebartag.name + ' (' + sidebartag.refs + ')'}</Link>
    </li>);
    return(
        <>
        <Link href="/tagged">
            <h3 id="sidebartags">{langState.tags}</h3></Link>
        <div className="tags">
            <ol className="tags">
                {sidebarTags}
            </ol>
        </div>
        </>
    );
}