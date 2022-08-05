import React, {useState} from "react";
import { Inertia } from "@inertiajs/inertia";

export default function GutenbergHome(props) {
    const posts = props.posts.map((post) =>
        <li key={post.id}><a href={'/gutenberg/edit/' + post.id}>
            {post.title}
        </a></li>);
    const [image, setImage] = useState({
        fileName: '',
        file: '',
    });
    function handleSubmit(e) {
        e.preventDefault();
        Inertia.post('/gutenberg/image', image);
    }
    return (
        <div>
            <h3><a href="/gutenberg/new">Write</a></h3>
            <h3>Edit/Delete</h3>
            <div className="gutenbergposts">
                <ol>
                    {posts}
                </ol>
            </div>
            <h3>Image upload</h3>
            {props.path && <h4>Image stored at {props.path}</h4>}
            <form onSubmit={handleSubmit} >
                <label htmlFor="image">File name</label><br></br>
                <input type="text" value={image.fileName} id="fileName" name="fileName"
                onChange={(e) => setImage({...image, fileName: e.target.value})} />
                <br></br>
                <input type="file" id="file" name="file" 
                onChange={(e) => setImage({...image, file: e.target.files[0]})}/>
                <br></br>
                <button type="submit">Upload</button>
            </form>
        </div>
    )
}