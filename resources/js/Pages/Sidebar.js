import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";
import Lightswitch from "./Lightswitch";

function formatDate(month, year) {
    const options = {year: 'numeric', month: 'long'};
    const date = new Date(year, month);
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
}

export default function Sidebar(props) {
    const allTags = usePage().props.alltags;
    const sidebarTags = allTags.map((sidebartag) =>
    <li key={sidebartag.id}>
        <Link>{sidebartag.name}</Link>
    </li>);
    const archives = usePage().props.archives;
    const sidebarArchive = archives.map((date) =>
    <li key={date.year + date.month}>
        <Link>
            {formatDate(date.month - 1, date.year)}
        </Link>
    </li>)
    return(
        <div className="sidebar">
            <h3 id="brightness">Brightness</h3>
            <Lightswitch />
            <h3 id="sidebartags">Tags</h3>
            <div className="tags">
                <ol className="tags">
                    {sidebarTags}
                </ol>
            </div>
            <h3 id="archives">Archive</h3>
            <div className="archives">
                <ol className="archives">
                    {sidebarArchive}
                </ol>
            </div>
            <h3 id="languages">Languages</h3>
            <div className="languages">
                <ul className="languages">
                    <li>English</li>
                    <li>Magyar</li>
                    <li>Deutsch</li>
                </ul>
            </div>
        </div>
    );
}