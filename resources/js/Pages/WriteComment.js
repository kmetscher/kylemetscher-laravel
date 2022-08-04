import React, { useState, useContext } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { LanguageContext } from "./LanguageContext";
import { ThemeContext } from "./ThemeContext";
import { Inertia } from "@inertiajs/inertia";
import Comment from "./Comment";

export default function WriteComment(props) {
    const { themeState, toggleTheme } = useContext(ThemeContext);
    const [comment, setComment] = useState({
        name: '',
        comment: '',
        trip: '',
        beehive: '',
        postid: props.postid
    });
    function handleChange(e) {
        const field = e.target.id;
        const value = e.target.value;
        setComment({
            ...comment,
            [field]: value
        })
    }
    return (
        <div className={themeState.commentclass}>
            <h3>Write a comment</h3>
            <p>Don't be a dick.</p>
            <p>This site stores no information about you. "Sign"
                your comments with a tripcode generated from a phrase
                you'll remember.
            </p>
            <p>You can use some Markdown formatting, like *asterisks* for
                <i>italics</i>, **double asterisks** for <b>bold</b>,
                or `backticks` for <code>code</code>.
            </p>
            {!comment.comment && <p>A preview of your comment will appear
                here when you begin typing.</p>}
            {comment.comment &&
                <Comment name={comment.name} comment={comment.comment}
                    date={new Date()} />}
            <form /*action="/comment" method="post" */ 
            onSubmit={(e) => {
                e.preventDefault();
                Inertia.post('/comment', comment)}}>
                <label htmlFor="name">Name </label><br></br>
                <input type="text" value={comment.name} onChange={handleChange}
                    id="name" name="name" required /><br></br>
                <label htmlFor="trip">Trip phrase </label><br></br>
                <input type="text" value={comment.phrase} onChange={handleChange}
                    id="trip" name="trip" required /><br></br>
                <label htmlFor="comment">Comment</label><br></br>
                <textarea name="comment" id="comment" value={comment.comment}
                    onChange={handleChange} cols="60" rows="5" required></textarea><br></br>
                <input type="text" className="beehive" value={comment.beehive}
                    onChange={handleChange} id="beehive" name="beehive" autoComplete="off" />
                <button type="submit">
                    some shit here for now idk
                </button>
            </form>
        </div>
    )
}