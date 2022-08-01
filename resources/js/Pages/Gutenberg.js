import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react"
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Site from "./Site";

export default function Gutenberg(props) {
    const [text, setText] = useState({
        title: props.title,
        slug: props.slug,
        body: props.body,
        image: props.image,
        tags: props.tags,
        id: props.id,
        language: props.language,
        tagmap: '',
    });
    function handleChange(e) {
        const field = e.target.id;
        const value = e.target.value;
        setText(text => ({
            ...text,
            [field]: value,
        }));
    }
    function handleSubmit(e) {
        e.preventDefault();
        Inertia.post('/gutenberg', text);
    }
    return (
        <div className="gutenberg">
            <Site title="Gutenberg" />
            <div className="editor">
                {props.id && <h3>Editing {props.title}</h3>}
                <form action={!props.id ? '/gutenberg/new' : '/gutenberg/edit'} method="post">
                    {props.id && <label htmlFor="id"><h3>Post ID</h3></label>}
                    {props.id && <input type="number" name="id" id="id"
                        value={props.id} />}
                    <label htmlFor="title"><h3>Title</h3></label>
                    <input type="text" name="title" id="title"
                        value={text.title}
                        onChange={handleChange} />
                    <label htmlFor="slug"><h3>Slug</h3></label>
                    <textarea name="slug" id="slug" cols={50} rows={2}
                        value={text.slug}
                        onChange={handleChange}>
                    </textarea>
                    <label htmlFor="body"><h3>Body</h3></label>
                    <textarea name="body" id="body" cols={50} rows={20}
                        value={text.body}
                        onChange={handleChange}>
                    </textarea>
                    <label htmlFor="image"><h3>Featured image</h3></label>
                    <input type="text" name="image" id="image"
                        value={text.image}
                        onChange={handleChange} />
                    <label htmlFor="language"><h3>Language</h3></label>
                    <select name="language" id="language" value={props.language}>
                        <option value="en">English</option>
                        <option value="hu">Magyar</option>
                        <option value="de">Deutsch</option>
                    </select>
                    <label htmlFor="tags"><h3>Tags</h3></label>
                    <input type="text" defaultValue = {props.tagstring}
                        onChange={
                            (e) => {
                                let exploded = e.target.value.split(',');
                                const taglist = exploded.map((tag, index) =>
                                    <li key={index}><a>{tag}</a></li>)
                                setText({
                                    ...text,
                                    tags: exploded,
                                    tagmap: taglist,
                                })
                            }}/>
                    <br></br>
                    <input type="text"
                        value={JSON.stringify(text.tags)}
                        name="tags" id="tags" readOnly />
                    <br></br>
                    <input type="submit" value="let's go girls" />
                </form>
            </div>
            <div>
                <div className="blogpost">
                    <ReactMarkdown>
                        {text.title}
                    </ReactMarkdown>
                    <img className="blogpost" src={text.image} />
                    <ReactMarkdown>
                        {text.body}
                    </ReactMarkdown>
                    <h3>Tagged:</h3>
                    <div className="filedunder">
                        <ol className="tagbox">
                            {text.tagmap}
                        </ol>
                    </div>
                    <div className="pubdatebox">
                        <p>Published April 20, 1337</p>
                    </div>
                </div>
                <div className="post">
                    <a className="headline">
                        <ReactMarkdown>
                            {text.title}
                        </ReactMarkdown>
                    </a>
                    <div className="postpreview">
                        <img className="featured" src={text.image}></img>
                        <p className="postslug">{text.slug}</p>
                    </div>
                    <div className="filedunder">
                        <ol className="tagbox">
                            {text.tagmap}
                        </ol>
                    </div>
                    <div className="pubdatebox">
                        <p>Published April 20, 1337</p>
                    </div>
                </div>
            </div>
        </div>
    )
}