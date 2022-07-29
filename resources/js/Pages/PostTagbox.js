import React, { useContext } from "react";
import { Link } from "@inertiajs/inertia-react";
import { LanguageContext } from "./LanguageContext";

export default function PostTagbox(props) {
    const {langState, changeLanguage} = useContext(LanguageContext);
    const tags = props.tags.map((tag) =>
    <li key={tag.tag_id}>
        <Link href={'/tagged/' + tag.id}>{tag.name}</Link>
    </li>);
    return(
        <>
        <h3>{langState.tagged}</h3>
        <div className="filedunder">
            <ol className="tagbox">
                {tags}
            </ol>
        </div>
        </>
    );
} 