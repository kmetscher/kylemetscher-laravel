import React from "react";

export default function GutenbergHome(props) {
    const posts = props.posts.map((post) =>
        <li key={post.id}><a href={'/gutenberg/edit/' + post.id}>
            {post.title}
        </a></li>)
    return (
        <div>
            <a href="/gutenberg/new">Write</a>
            <p>Edit/Delete</p>
            <div className="gutenbergposts">
                <ol>
                    {posts}
                </ol>
            </div>
            <p>Image upload</p>
        </div>
    )
}