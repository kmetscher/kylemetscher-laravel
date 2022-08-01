import React from "react";
import Layout from "./Layout";
import PostTagbox from "./PostTagbox";
import Published from "./Published";
import Site from "./Site";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function ViewPost(props) {
    const regExp = new RegExp('\\w'); // Remove markdown shit
    const metaTitle = props.title.substring(props.title.search(regExp));
    // Return the title string 
    return (
        <Layout>
            <Site title={metaTitle} />
            <div className="blogpost">
                <ReactMarkdown>{props.title}</ReactMarkdown>
                <img className="blogpost" src={props.image}></img>
                <ReactMarkdown>
                    {props.body}
                </ReactMarkdown>
                <PostTagbox tags={props.tags}/>
                <Published date={props.date}/>
            </div>
    </Layout>
    );
}