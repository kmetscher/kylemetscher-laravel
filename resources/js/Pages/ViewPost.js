import React from "react";
import Layout from "./Layout";
import PostTagbox from "./PostTagbox";
import Published from "./Published";
import Site from "./Site";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import WriteComment from "./WriteComment";
import Comment from "./Comment";

export default function ViewPost(props) {
    const regExp = new RegExp('\\w'); // Remove markdown shit
    const metaTitle = props.title.substring(props.title.search(regExp));
    // Return the title string 
    const comments = props.comments.map((comment) => 
    <Comment name={comment.name} trip={comment.trip} key={comment.id}
    comment={comment.comment} date={comment.created_at}/>)
    return (
        <Layout>
            <Site title={metaTitle} image={props.image} slug={props.slug}/>
            <div className="blogpost">
                <ReactMarkdown>{props.title}</ReactMarkdown>
                <img className="blogpost-featured" src={props.image}></img>
                <ReactMarkdown>
                    {props.body}
                </ReactMarkdown>
                <PostTagbox tags={props.tags}/>
                <Published date={props.date}/>
            </div>
            {comments}
            <WriteComment postid={props.id}/>
    </Layout>
    );
}