import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
    return (
        <div className="blog-list">
            {blogs.map((res) => (
                <div className="blog-preview" key={res.id}>
                    <Link to={`/blog/${res.id}`}>
                        <h2>{res.title}</h2>
                        <p>Written by {res.author}</p>
                        <div>{res.body}</div>
                    </Link>
                    {/* <button onClick={() => { handleDeleteClick(res.id) }}>Delte</button> */}
                </div>
            ))
            }
        </div >
    );
}

export default BlogList;