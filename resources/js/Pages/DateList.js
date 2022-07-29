import React, { useContext } from "react";
import { usePage } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";
import { formatDate } from "./formatDate";

export default function DateList(props) {
    const archive = usePage().props.archives;
    const dateList = archive.map((date) =>
        <li key={date.year + date.month}>
        <Link href={'/archive/' + date.year + '0' + date.month
                                /* unbelievably cursed */}>
            <h3>{formatDate(date.month - 1, date.year)}</h3>
        </Link>
    </li>);
    return(
        <div>
            {dateList}
        </div>
    )
}