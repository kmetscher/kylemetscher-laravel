import React from "react";

export default function GutenbergHome(props) {
    const posts = props.posts;
    return (
        <div>
            <a href="/gutenberg/new">Write</a>
            <p>Edit/Delete</p>
            <ol>
                {}
            </ol>
            <p>Image upload</p>
        </div>
    )
}