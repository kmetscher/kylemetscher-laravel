import React from "react";
import Layout from "./Layout";
import PostTagbox from "./PostTagbox";
import Published from "./Published";

export default function ViewPost(props) {
    return (
        <Layout>
            <div className="blogpost">
                <h2>{props.title}</h2>
                <img className="blogpost" src="https://kylemetscher.com/images/{post.image}"></img>
                {props.body}
                <div className="filedunder">
                    <PostTagbox tags={props.tags}/>
                </div>
                <div className="pubdatebox">
                    <Published />
                </div>
            </div>
    </Layout>
    );
}