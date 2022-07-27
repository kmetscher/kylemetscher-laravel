import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/inertia-react";

export default function SidebarTags(props) {
    const allTags = usePage().props.alltags;
    const sidebarTags = allTags.map((sidebartag) =>
    <li key={sidebartag.id}>
        <Link href={'/tagged/' + sidebartag.id}>{sidebartag.name}</Link>
    </li>);
    return(
        <>
        <h3 id="sidebartags">Tags</h3><div className="tags">
            <ol className="tags">
                {sidebarTags}
            </ol>
        </div>
        </>
    );
}