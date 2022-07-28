import React from "react";
import { Head } from "@inertiajs/inertia-react";
export default function Site(props) {
    return(
        <Head>
            <title>{props.title + ' | Kyle Metscher'}</title>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@500&display=swap" rel="stylesheet"></link>
        </Head>
    );
}