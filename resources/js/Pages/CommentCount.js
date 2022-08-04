import React, {useContext} from "react";
import { LanguageContext } from "./LanguageContext";

export default function CommentCount(props) {
    const {langState, changeLanguage} = useContext(LanguageContext);
    const count = props.commentcount[props.index];
    let countText;
    switch (count) {
        case 0:
            countText = langState.commentzero;
            break;
        case 1:
            countText = `${count} ${langState.commentsingular}`;
            break;
        default:
            countText = `${count} ${langState.commentplural}`;
    }

    return (
        <div className="commentcount">
            <p>{countText}</p>
        </div>
    )
}