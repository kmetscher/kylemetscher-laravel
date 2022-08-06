import React, {useContext} from "react";
import { Head } from "@inertiajs/inertia-react";
import { LanguageContext } from "./LanguageContext";

export default function Site(props) {
    return(
        <Head>
            <title>{props.title + ' | Kyle Metscher'}</title>
            <meta charset="utf-8" />
            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.slug} />
            <meta property="og:image" content={'https://kylemetscher.com' + props.image} />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@500&display=swap" rel="stylesheet"></link>
        </Head>
    );
}