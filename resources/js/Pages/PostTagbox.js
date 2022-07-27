import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function PostTagbox(props) {
    const tags = props.tags.map((tag) =>
    <li key={tag.tag_id}>
        <Link href={'/tagged/' + tag.id}>{tag.name}</Link>
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