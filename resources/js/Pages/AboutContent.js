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
Korábban autószerelő, raktármunkás, szabadúszó író, forditó, meg sok más 
unalmas dolog is voltam.

A linkeket fel és a sáv jobbra (számitógépen) vagy alól (mobilon) használja
az oldal navigációjához.

Ezt az oldalt megépítettem a [Laravel PHP frameworkkal](https://laravel.com/),
a [React JavaScript könyvtárral](https://reactjs.org/),
és az [Inertia adapter könyvtárral](https://inertiajs.com/). A 
[GitHub-on](https://github.com/kmetscher/kylemetscher-laravel) látható a
forráskódja.

Változtatja Ön az oldal kinézését a tarot arcra kattintva a "Napsütés" alatt, 
és válasszon egy nyelvet az oldalnak a nyelv nevére kattintva.

A "Témák" linkre kattintva láthatja Ön minden témát amivel írok itt; az 
"Archivum" linkre pedig régi posztok hónaponként. Ha számitógépen vagy, egy
pontos témára vagy dátumra kattintva lát Ön minden poszt ez alatt a téma
vagy dátum alatt.

Olvasson egy posztot a címére vagy képére kattintva. Egy témára kattintva
ami egy poszt alatt van is hoz listát ezekkel a témátikus posztok Önnek.

Ez az oldal gyűjti az Ön nyelvét és fényérösségpreferenciaját arra a célra
hogy dolgok a nyelvén és szemtoleráncián vannak. Soha nem gyűjti a 
szemelyes információját, meg soha nem fog.`; 
        break;
        case 'de-DE': markdown = 
`## Grüß dich!

Ich bin ein Student der Informatik bei dem Western Governors Universität in
der Vereignete Staaten. Früher war ich auch Automechaniker, Lagerungarbeiter,
freiberuflicher Schreiber, Übersetzer, und viele andere ganz langweilig Sachen.

Mit der Links hoch und mit dem Randleiste (Desktop) oder Fußzeile (Mobil)
können Sie die Seite navigieren. 

Ich baute diese Seite mit dem [Laravel PHP framework](https://laravel.com/), 
der [React JavaScript Bibliothek](https://reactjs.org/), 
und der [Inertia adaptive Biblothek](https://inertiajs.com/). Sie können
den Quellcode sehen auf 
[GitHub](https://github.com/kmetscher/kylemetscher-laravel).

Sie können den Aussehung der Seite ändern mit einem Drück des Tarotgesichts
unter "Helligkeit." Wählen Sie auch eine Sprache für die Seite mit einem 
Drück.

Mit der "Tags" Link können Sie alle Tags sehen, mit den ich schreibe. Unter 
"Archiv" finden Sie eine Liste von Posts pro Monat und Jahr. Wenn Sie auf
Desktop sind, drücken Sie eine Tag oder ein Datum um Posts mit dieser zu
sehen.

Lesen Sie einen Beitrag mit einem Drück auf seinen Titel oder Bild. Drücken
Sie eine Tag unter einem Beitrag um weiter Beiträge zu sehen mit dieser Tag.

Diese Seite sammelt deine Sprache und Helligkeitpräferenz damit Sachen in
Ihrer Sprache und Augentoleranz sind. Es sammelt nicht Ihre persönliches
Infos, und wird das auch nie machen.`; 
        break;
    }
    return (
        <ReactMarkdown>
            {markdown}
        </ReactMarkdown>
    )
}