import React, {useState/*, useContext*/} from "react";
import Site from "./Site";

/* Several sections are commented out in anticipation of future use with 
React's context hooks. */

export default function Tagline(props) {
    const [taglinetype, setType] = useState(props.taglinetype);
    // const lang = useContext(LangContext);
    // const theme = useContext(ThemeContext);

    let taglineContent; // to use in header
    let titleContent;
    /* We want the tagline to look different depending on its state, since
    the tagline might be used to display the name of a tag, an archive date,
    or the name of a language. The tagline type is passed as a prop to use
    in state, and here we can conditionally define a variable to hold the 
    appropriate JSX for the tagline type. The use of state lets us reuse 
    this component sitewide. */
    if (taglinetype === 'tag') {
        titleContent = 'Tagged ' + props.tagline;
        taglineContent =
        <h2 className="tagline">Tagged {props.tagline}</h2>
        /* 
        taglineContent =
        <h2 className="tagline">{lang.tagphrase} {props.tagline}</h2>
        */
    }
    if (taglinetype === 'date') {
        const options = {year: 'numeric', month: 'long'};
        const year = props.tagline[0].year;
        const month = props.tagline[0].month - 1;
        /* Possibly the most cursed thing I have ever written in JS. Not only
        are months zero-indexed in its Date object, but its typing system just 
        let me subtract an integer 1 from a fucking string. */
        const newDate = new Date(year, month);
        const archiveDate = newDate.toLocaleDateString('en-US', options);
        // const archiveDate = newDate.toLocaleDateString(lang.dateFormat, options);
        titleContent = archiveDate;
        taglineContent =
        <h2 className="tagline">{archiveDate}</h2>
    }
    if (taglinetype === 'lang') {
        switch (props.tagline) {
            case 'en':
                titleContent = 'Posts in English';
                taglineContent =
                <h2 className="tagline">{titleContent}</h2>
                break;
            case 'hu':
                titleContent = 'Magyar nyelvű cikkek';
                taglineContent =
                <h2 className="tagline">{titleContent}</h2>
                break;
            case 'de':
                titleContent = 'Beiträge auf Deutsch';
                taglineContent =
                <h2 className="tagline">{titleContent}</h2>
                break;
        }
        /* 
        taglineContent =
        <h2 className="tagline">{lang.langtagline}</h2>
        */
    }

    return(
        <div>
            <Site title={titleContent} />
            {taglineContent}
        </div>
    );
}