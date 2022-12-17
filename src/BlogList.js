import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
    return (
        <div className="blog-list">
            {blogs.map((res) => (
                <div className="blog-preview" key={res.id}>
                    <Link to={`/blog/${res.id}`}>
                        <h2>{res.title}</h2>
                        <hr></hr>
                        <br></br>
                        <h5>Written by {res.author}</h5>
                        <br></br>
                        <div>{res.body}</div>
                    </Link>
                </div>
            ))
            }
        </div >
    );
}

export default BlogList;