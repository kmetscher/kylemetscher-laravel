import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function Tagbox(props) {
    const index = props.index;
    const tagColl = props.tags[index];
    const tags = tagColl.map((tag) => 
        <li key="tagIndex">
            <Link href="{tag.tag_id}">{tag.name}</Link>
        </li>);
    return(
        <div className="filedunder">
            <p id="tagboxunder">Filed under:</p>
            <ol className="tagbox">
                {tags}
            </ol>
        </div>
    );
}