import React from "react";
export default function Published(props) {
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    let date = new Date(props.date);
    date = date.toLocaleDateString('en-US', options);
    /*
    date = date.toLocaleDateString(lang.dateFormat, options);
    */
    return(
        <div className="pubdatebox">
            <p>Published {date}</p>
        </div>
    );
    /* 
    return(
        <div className="pubdatebox">
            <p className="pubdate">{lang.published} {date}</p>
        </div>
    );
    */
}