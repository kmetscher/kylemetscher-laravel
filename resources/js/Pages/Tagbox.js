import React from "react";
export default function Tagbox(props) {
    const postID = props.postID;
    const tags = props.tags;
    const postTags = tags.map((tag) => {
    if (postID === tags.post_id) {
        return(
            <li key={tags.id}>{tags.name}</li>
        )}
    });
    return(
        <div className="filedunder">
            <p id="tagboxunder">Filed under:</p>
            <ol className="tagbox">
                {postTags}
            </ol>
        </div>
    );
}