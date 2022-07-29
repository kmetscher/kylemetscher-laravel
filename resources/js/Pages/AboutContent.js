import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import ReactMarkdown from "react-markdown";

export default function AboutContent(props) {
    const {langState, changeLanguage} = useContext(LanguageContext);
    let markdown
    switch (langState.locale) {
        case 'en-US': markdown = 
`## Howdy!

I am a Computer Science major at Western Governors University. Previously,
I have been an auto mechanic, warehouse worker, freelance writer, translator,
and many other things too boring to list here.

I built this site with the 
[Laravel PHP framework](https://laravel.com/), 
the [React JavaScript library](https://reactjs.org/), 
and the [Inertia adapter library](https://inertiajs.com/). You can view
its source code and implementation details on 
[GitHub](https://github.com/kmetscher/kylemetscher-laravel).

Navigate the site with the links in the header and sidebar (desktop) or footer (mobile). 

Change the site's theme by toggling the tarot face under "Brightness," 
and change languages by selecting one listed. 

The "Tags" and "Archives" links take you to a page listing their respective 
items. On desktop, selecting a tag or date returns all posts filed under that
tag or posted within that month, respectively.

View a post by clicking/tapping its title or featured image. Selecting a tag underneath
a post also returns all posts filed under that topic.

This site collects your locale and saves your preferred theme brightness
so things are in your language and within your retinal tolerances. It 
doesn't track you, doesn't store personal information, and never will.`; 
        break;
        case 'hu-HU': markdown = 
`## Szia!

Informatikus diák vagyok a Western Governors Egyetemen az Egyesült Államokban.
Korábban utószerelő, raktármunkás, szabadúszó író, forditó, meg sok más 
unalmas dolog is voltam.

Ezt az oldalt megépítettem a [Laravel PHP frameworkkal](https://laravel.com/),
a [React JavaScript könyvtárral](https://reactjs.org/),
és az [Inertia adapter könyvtárral](https://inertiajs.com/). A 
[GitHub-on](https://github.com/kmetscher/kylemetscher-laravel) látható a
forráskódja.

Változtatja Ön az oldal kinézését a tarot arcra kattintva a "Napsütés" alatt, 
és válasszon egy nyelvet az oldalnak a nyelv nevére kattintva.

A "Témák" és "Archivum" `; 
        break;
        case 'de-DE': markdown = 
`## Hallo!`; 
        break;
    }
    return (
        <ReactMarkdown>
            {markdown}
        </ReactMarkdown>
    )
}