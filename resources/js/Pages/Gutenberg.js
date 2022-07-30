import React, { useState } from "react"
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Tagbox from "./Tagbox";
import Published from "./Published";
import Site from "./Site";

export default function Gutenberg(props) {
    const [text, setText] = useState({
        title: '',
        slug: '',
        body: '',
        image: '',
        tags: [],
    });
    return (
        <div className="gutenberg">
            <Site title="Gutenberg" />
            <div className="editor">
                <form>
                    <label htmlFor="title"><h3>Title</h3></label>
                    <input type="text" name="title" id="title"
                        value={text.title}
                        onChange={
                            (e) => setText({
                                ...text,
                                title: e.target.value
                            })} />
                    <label htmlFor="slug"><h3>Slug</h3></label>
                    <textarea name="slug" id="slug" cols={50} rows={2}
                        value={text.slug}
                        onChange={
                            (e) => setText({
                                ...text,
                                slug: e.target.value
                            })}>
                    </textarea>
                    <label htmlFor="body"><h3>Body</h3></label>
                    <textarea name="body" id="body" cols={50} rows={20}
                        value={text.body}
                        onChange={
                            (e) => setText({
                                ...text,
                                body: e.target.value
                            })}>
                    </textarea>
                    <label htmlFor="image"><h3>Featured image</h3></label>
                    <input type="text" name="image" id="tag"
                        value={text.image}
                        onChange={
                            (e) => setText({
                                ...text,
                                image: e.target.value
                            })} />
                    <label htmlFor="tags"><h3>Tags</h3></label>
                    <input type="text" name="tags" id="tags"
                        onChange={
                            (e) => {
                                let exploded = e.target.value.split(',');
                                const taglist = exploded.map((tag, index) =>
                                    <li key={index}><a>{tag}</a></li>)
                                setText({
                                    ...text,
                                    tags: taglist
                                })
                            }} />

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
                            {text.tags}
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
                            {text.tags}
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