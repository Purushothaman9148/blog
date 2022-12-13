const BlogList = ({ blogs, handleDeleteClick }) => {
    return (
        <div className="blog-list">
            {blogs.map((res) => (
                <div className="blog-preview" key={res.id}>
                    <h2>{res.title}</h2>
                    <p>Written by {res.author}</p>
                    <button onClick={() => { handleDeleteClick(res.id) }}>Delte</button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;