import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function Languages(props) {
    return(
        <>
        <h3 id="languages">Languages</h3><div className="languages">
            <ul className="languages">
                <Link><li>English</li></Link>
                <Link><li>Magyar</li></Link>
                <Link><li>Deutsch</li></Link>
            </ul>
        </div>
        </>
    );
}