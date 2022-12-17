import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();
    const handelSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setIsPending(true);
        console.log(blog);
        fetch('https://jsonserver-production-96f3.up.railway.app/data/', {
            method: 'POST',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);
            navigate('/');
        });
    }
    return (<div className="create">
        <h2>Add new blog</h2>
        <form onSubmit={handelSubmit}>
            <label>Blog title:</label>
            <input
                type="text" required
                value={title} onChange={(e) => { setTitle(e.target.value) }}>
            </input>
            <label>Blog Author:</label>
            <select value={author} onChange={(e) => { setAuthor(e.target.author) }}>
                <option value="Purushothaman">Purushothaman</option>
            </select>
            <label>Blog body:</label>
            <textarea required value={body} onChange={(e) => { setBody(e.target.value) }}>
            </textarea>

            {!isPending && <button type="submit">Add Blog</button>}
        </form>
    </div>);
}

export default Create;