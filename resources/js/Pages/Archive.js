import React from "react";
import Layout from "./Layout";
import Tagline from "./Tagline";
import SidebarArchive from "./SidebarArchive";
import { formatDate } from "./formatDate";
import { usePage } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";

export default function Archive(props) {
    const archive = usePage().props.archives;
    const dateList = archive.map((date) =>
        <li key={date.year + date.month}>
        <Link href={'/archive/' + date.year + '0' + date.month
                                /* unbelievably cursed */}>
            <h3>{formatDate(date.month - 1, date.year)}</h3>
        </Link>
    </li>);
    return(
        <Layout>
            <Tagline taglinetype='archive' />
            <div className="archive">
                <ol>
                    {dateList}
                </ol>
            </div>
        </Layout>
    );
}
