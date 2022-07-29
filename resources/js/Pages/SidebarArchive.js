import React, { useContext } from "react";
import { Link } from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/inertia-react";
import { formatDate } from "./formatDate";
import { LanguageContext } from "./LanguageContext";

export default function SidebarArchive(props) {
    const {langState, changeLanguage} = useContext(LanguageContext);
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
        <Link href="/archive">
            <h3 id="archives">{langState.archive}</h3></Link>
        <div className="archives">
            <ol className="archives">
                {sidebarArchive}
            </ol>
        </div>
        </>
    );
}