import React from "react";
import Layout from "./Layout";
import Tagbox from "./Tagbox";
import Published from "./Published";
import { Link } from "@inertiajs/inertia-react";

export default function PostPreviews(props) {
    const posts = props.posts;
    const tags = props.tags;
    const postPreviews = posts.map((post, index) => 
        <div key={post.id} className="post">
            <Link className="headline"><h2>{post.title}</h2></Link>
            <div className="postpreview" key={post.id}>
                <img className="featured" src=""></img>
                <p className="postslug">{post.slug}</p>
            </div>
            <Tagbox tags={tags} index ={index}/>
            <Published date={post.date}/>
        </div>
    );
    return(
        <Layout>
            {props.headline && // Conditionally render headlines like tag names etc
                <h2 className="tagline">{props.headline}</h2>}
            {postPreviews}
        </Layout>
    )
}