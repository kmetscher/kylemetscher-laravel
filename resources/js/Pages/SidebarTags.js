import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/inertia-react";

export default function SidebarTags(props) {
    const allTags = usePage().props.alltags;
    const sidebarTags = allTags.map((sidebartag) =>
    <li key={sidebartag.id}>
        <Link href={'/tagged/' + sidebartag.id}>
            {sidebartag.name + ' (' + sidebartag.refs + ')'}</Link>
    </li>);
    return(
        <>
        <Link href="/alltags"><h3 id="sidebartags">Tags</h3></Link>
        <div className="tags">
            <ol className="tags">
                {sidebarTags}
            </ol>
        </div>
        </>
    );
}