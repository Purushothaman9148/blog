import BlogList from "./BlogList";
import useFetch from "./usefetch";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('https://jsonserver-production-96f3.up.railway.app/data');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
            {blogs && <BlogList blogs={blogs} />}
        </div>
    );
}

export default Home;