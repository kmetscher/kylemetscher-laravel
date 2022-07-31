import React, { useContext } from "react";
import Layout from "./Layout";
import Tagbox from "./Tagbox";
import Published from "./Published";
import Tagline from "./Tagline";
import { Link } from "@inertiajs/inertia-react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function PostPreviews(props) {
    const posts = props.posts;
    const tags = props.tags;
    const postPreviews = posts.map((post, index) =>
        <div key={post.id} className="post">
            <Link href={'/viewpost/' + post.id}>
                <ReactMarkdown className="headline">
                    {post.title}
                </ReactMarkdown>
            </Link>
            <div className="postpreview" key={post.id}>
            <Link href={'/viewpost/' + post.id}>
                <img className="featured" src={post.image}></img>
            </Link>
                <p className="postslug">{post.slug}</p>
            </div>
            <Tagbox tags={tags} index={index} />
            <Published date={post.date} />
        </div>
    );
    return (
        <Layout>
            <Tagline
                taglinetype={props.taglinetype}
                tagline={props.tagline}
            />
            {postPreviews}
        </Layout>
    )
}