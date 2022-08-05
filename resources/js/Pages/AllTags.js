import React, { useContext } from "react";
import Layout from "./Layout";
import Tagline from "./Tagline";
import { usePage } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";

export default function AllTags(props) {
    const media = window.matchMedia('(max-width: 800px');
    const allTags = usePage().props.alltags;
    const totalRefs = usePage().props.totalrefs;
    let shuffleTags = allTags;
    shuffleTags = shuffleTags.sort(() => Math.random() - 0.5);
    const tagCloud = shuffleTags.map((tag) => 
        <li key={tag.id}>
            <Link style= /* We're resizing each link as a percentage of
            total refs to make a weighted tag cloud */
            {{fontSize: ((tag.refs / totalRefs) * 100) + 'vw'}}
            href={'/tagged/' + tag.id}>
                {tag.name}
            </Link>
        </li>);
        // for mobile
    const tagList = allTags.map((tag) =>
        <li key={tag.id}>
            <Link href={'/tagged/' + tag.id}>
                {tag.name + ' (' + tag.refs + ')'} 
            </Link>
        </li>
    )
    return(
        <Layout>
            <Tagline taglinetype='tags' />
            {!media.matches && <div className="taglist">
                <ul>
                    {tagCloud}
                </ul>
            </div>}
            {media.matches && <div className="taglistmobile">
                <ul>
                {tagList}
                </ul>
            </div>}
        </Layout>
    );
}