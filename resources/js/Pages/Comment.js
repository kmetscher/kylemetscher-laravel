import React, {useContext} from "react";
import { LanguageContext } from "./LanguageContext";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { formatDate } from "./formatDate";
export default function Comment(props) {
    const {langState, changeLang} = useContext(LanguageContext);
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    let date = new Date(props.date);
    date = date.toLocaleDateString(langState.locale, options);
    return(
        <div className="comment">
            <h3>{props.name} @{props.trip} {langState.said}</h3>
            <ReactMarkdown disallowedElements={['a', 'h1', 'h2', 'h3', 'h4',
            'h5', 'h6', 'img', 'pre', 'input', 'button', 'textarea', 'script']}>
                {props.comment}
            </ReactMarkdown>
            <p>{date}</p>
        </div>
    )
}