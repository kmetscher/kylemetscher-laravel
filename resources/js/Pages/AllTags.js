import React from "react";
import Layout from "./Layout";
import Tagline from "./Tagline";
import { usePage } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";

export default function AllTags(props) {
    const allTags = usePage().props.alltags;
    const totalRefs = usePage().props.totalrefs;
    const tagCloud = allTags.map((tag) => 
        <li key={tag.id}>
            <Link style= /* We're resizing each link as a percentage of
            total refs to make a weighted tag cloud */
            {{fontSize: ((tag.refs / totalRefs) * 100) + 'vw'}}
            href={'/tagged/' + tag.id}>
                {tag.name}
            </Link>
        </li>);
    return(
        <Layout>
            <Tagline taglinetype='tags' />
            <div className="taglist">
                <ul>
                    {tagCloud}
                </ul>
            </div>
        </Layout>
    );
}