import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/inertia-react";
import { formatDate } from "./formatDate";

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
        <Link href="/archive"><h3 id="archives">Archive</h3></Link>
        <div className="archives">
            <ol className="archives">
                {sidebarArchive}
            </ol>
        </div>
        </>
    );
}