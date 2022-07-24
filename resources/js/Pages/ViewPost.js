import React from "react";
import Layout from "./Layout";
import Tagbox from "./Tagbox";
import Published from "./Published";

export default function ViewPost(post) {
    return (
        <Layout>
            <div className="blogpost">
                <h2>{post.title}</h2>
                <img className="blogpost" src="https://kylemetscher.com/images/{post.image}"></img>
                {post.body}
                <div className="filedunder">
                    <Tagbox />
                </div>
                <div className="pubdatebox">
                    <Published />
                </div>
            </div>
    </Layout>
    );
}