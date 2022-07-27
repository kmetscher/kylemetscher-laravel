import React from "react";
import Layout from "./Layout";
import Tagbox from "./Tagbox";
import Published from "./Published";
import Tagline from "./Tagline";
import { Link } from "@inertiajs/inertia-react";
import Site from "./Site";

export default function PostPreviews(props) {
    const posts = props.posts;
    const tags = props.tags;
    const postPreviews = posts.map((post, index) => 
        <div key={post.id} className="post">
            <h2><Link href={'/viewpost/' + post.id} className="headline">{post.title}</Link></h2>
            <div className="postpreview" key={post.id}>
                <img className="featured" src={'https://kylemetscher.com/' + post.image}></img>
                <p className="postslug">{post.slug}</p>
            </div>
            <Tagbox tags={tags} index={index}/>
            <Published date={post.date}/>
        </div>
    );
    return(
        <Layout>
            <Site title='Home' />
            {props.tagline && // Conditionally render the tagline 
            <Tagline 
            taglinetype={props.taglinetype}
            tagline={props.tagline}
            />}
            {postPreviews}
        </Layout>
    )
}