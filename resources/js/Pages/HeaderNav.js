import React from "react";
import { Link } from '@inertiajs/inertia-react';

export default function HeaderNav(props) {
    return(
        <div>
            <header className="header">
                <h1>KYLE METSCHER</h1>
            </header>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
}