import React from "react";
export default function Published(props) {
    return(
        <div className="pubdatebox">
            <p className="pubdate">Published {props.date}</p>
        </div>
    );
}