import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./usefetch";

const BlogDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data: blogs, isPending, error } = useFetch(`https://jsonserver-production-96f3.up.railway.app/data/${id}`);

    const handleClick = () => {
        fetch('https://jsonserver-production-96f3.up.railway.app/data/' + blogs.id, {
            method: 'DELETE',
        }).then(() => {
            navigate('/');
        });
    }
    const styles = {
        margin: "10px"
    }
    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && (<article>
                <h2>{blogs.title}</h2>
                <p>Written by {blogs.author}</p>
                <div>{blogs.body}</div>
                <button onClick={handleClick}>delete</button>
                <button onClick={() => navigate(-1)} style={styles}>⬅️ back</button>
            </article>)}
        </div>
    );
}

export default BlogDetails;