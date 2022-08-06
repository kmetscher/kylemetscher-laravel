import React, { useState, useContext } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { LanguageContext } from "./LanguageContext";
import { ThemeContext } from "./ThemeContext";
import { Inertia } from "@inertiajs/inertia";
import Comment from "./Comment";

export default function WriteComment(props) {
    const { themeState, toggleTheme } = useContext(ThemeContext);
    const { langState, changeLanguage } = useContext(LanguageContext);
    const [comment, setComment] = useState({
        name: '',
        comment: '',
        trip: '',
        beehive: '',
        postid: props.postid
    });
    let info;
    switch (langState.locale) {
        case 'en-US':
            info = <>
                <p>Don't be a dick.</p>
                <p>This site stores no information about you. "Sign"
                    your comments with a tripcode generated from a phrase
                    you'll remember.
                </p>
                <p>You can use some Markdown formatting, like *asterisks* for
                    <i>italics</i>, **double asterisks** for <b>bold</b>,
                    or `backticks` for <code>code</code>.
                </p>
            </>;
            break;
        case 'hu-HU':
            info = <>
                <p>Ne legyen köcsög.</p>
                <p>Ez az oldal nem gyűjti az Ön szemelyes információját.
                    "Írja alá" a kommenteit egy mondatból generált tripkóddal.
                    Használja Ön egy mondatot ami emlékezni fog.
                </p>
                <p>Használhat Markdown-ot, példaul *csillagok*
                    <i>dölt betűkért</i>, **dupla csillag** <b>erős betűkért</b>,
                    vagy `backtickek` <code>kódért</code>.
                </p>
            </>;
            break;
        case 'de-DE':
            info = <>
                <p>Seien Sie kein Arschloch.</p>
                <p>Diese Seite sammelt nicht dein persönliches Infos.
                    Sie können Ihren Kommentar "unterschrieben" mit einem
                    Tripcode, der mit einer Phrase generiert ist, an die Sie 
                    sich errinern werden.
                </p>
                <p>Sie können etwas Markdown nutzen, wie zum Beispiel 
                    *Sterne* für <i>Kursivschrift</i>, **Doppelsterne** 
                    für <b>Fettschrift</b>, oder `Backticks` für <code>Code.</code>
                </p>
            </>
    }
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
            <h3>{langState.commentwrite}</h3>
            {info}
            {!comment.comment && <p>{langState.commentpreview}</p>}
            {comment.comment &&
                <Comment name={comment.name} comment={comment.comment}
                    date={new Date()} />}
            <form /*action="/comment" method="post" */
                onSubmit={(e) => {
                    e.preventDefault();
                    Inertia.post('/comment', comment);
                    setComment({
                        ...comment,
                        name: '',
                        comment: '',
                        trip: '',
                    });
                }}>
                <label htmlFor="name">{langState.commentname} </label><br></br>
                <input type="text" value={comment.name} onChange={handleChange}
                    id="name" name="name" required /><br></br>
                <label htmlFor="trip">{langState.commenttrip} </label><br></br>
                <input type="text" value={comment.phrase} onChange={handleChange}
                    id="trip" name="trip" required /><br></br>
                <label htmlFor="comment">{langState.commentarea}</label><br></br>
                <textarea name="comment" id="comment" value={comment.comment}
                    onChange={handleChange} rows="5" required></textarea><br></br>
                <input type="text" className="beehive" value={comment.beehive}
                    onChange={handleChange} id="beehive" name="beehive" autoComplete="off" />
                <button type="submit">
                    {langState.commentsubmit}
                </button>
            </form>
        </div>
    )
}