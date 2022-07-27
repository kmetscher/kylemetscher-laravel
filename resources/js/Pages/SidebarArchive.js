import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/inertia-react";

function formatDate(month, year) {
    const options = {year: 'numeric', month: 'long'};
    const date = new Date(year, month);
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
}

export default function SidebarArchive(props) {
    const archives = usePage().props.archives;
    const sidebarArchive = archives.map((date) =>
    <li key={date.year + date.month}>
        <Link href={'/archive/' + date.year + '0' + date.month
                                /* unbelievably cursed */}>
            {formatDate(date.month - 1, date.year)}
        </Link>
    </li>);
    return(
        <>
        <h3 id="archives">Archive</h3><div className="archives">
            <ol className="archives">
                {sidebarArchive}
            </ol>
        </div>
        </>
    );
}