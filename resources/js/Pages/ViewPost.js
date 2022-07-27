import React from "react";
import Layout from "./Layout";
import PostTagbox from "./PostTagbox";
import Published from "./Published";
import Site from "./Site";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function ViewPost(props) {
    const markdown = 
    `## omg hey!!  

does this work lol`
    return (
        <Layout>
            <Site title={props.title} />
            <div className="blogpost">
                <h2>{props.title}</h2>
                <img className="blogpost" src={'https://kylemetscher.com/' + props.image}></img>
                <ReactMarkdown>
                    {props.body}
                </ReactMarkdown>
                <PostTagbox tags={props.tags}/>
                <Published date={props.date}/>
            </div>
    </Layout>
    );
}