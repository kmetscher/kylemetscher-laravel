import React, {useState, useContext} from "react";
import { LanguageContext } from "./LanguageContext";
import Site from "./Site";

/* Several sections are commented out in anticipation of future use with 
React's context hooks. */

export default function Tagline(props) {
    const [taglinetype, setType] = useState(props.taglinetype);
    const {langState, changeLanguage} = useContext(LanguageContext);
    // const theme = useContext(ThemeContext);
    let titleContent;
    /* We want the tagline to look different depending on its state, since
    the tagline might be used to display the name of a tag, an archive date,
    or the name of a language. The tagline type is passed as a prop to use
    in state, and here we can conditionally define a variable to hold the 
    appropriate JSX for the tagline type. The use of state lets us reuse 
    this component sitewide. */
    if (taglinetype === 'home') {
        titleContent = langState.home;
    }
    if (taglinetype === 'tag') {
        switch (langState.locale) {
            case 'en-EN':
            case 'de-DE': 
                titleContent = `${langState.typetag} ${props.tagline}`;
            break;
            case 'hu-HU': 
                titleContent = `${props.tagline} ${langState.typetag}`;
            break;
        }
    }
    if (taglinetype === 'date') {
        const options = {year: 'numeric', month: 'long'};
        const year = props.tagline[0].year;
        const month = props.tagline[0].month - 1;
        const locale = langState.locale;
        /* Possibly the most cursed thing I have ever written in JS. Not only
        are months zero-indexed in its Date object, but its typing system just 
        let me subtract an integer 1 from a fucking string. */
        const newDate = new Date(year, month);
        const archiveDate = newDate.toLocaleDateString(locale, options);
        // const archiveDate = newDate.toLocaleDateString(lang.dateFormat, options);
        titleContent = archiveDate;
    }
    if (taglinetype === 'lang') {
        titleContent = langState.langposts;
    }
    if (taglinetype === 'tags') {
        titleContent = langState.alltags;
    }
    if (taglinetype === 'archive') {
        titleContent = langState.archive;
    }
    const taglineContent = <h2 className="tagline">{titleContent}</h2>
    return(
        <div>
            <Site title={titleContent} />
            {taglineContent}
        </div>
    );
}