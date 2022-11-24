import Post from "../components/Post";
import Link from "next/link";
import { useSelector } from "react-redux";

const Home = () => {
    const posts = useSelector((state) => state.base.posts);
    return (
        //? SPACING
        <div>
            <div className="px-10 mb-8  grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-10 xl:gird-col-4 justify-items-center">
                {posts &&
                    posts.map((post, index) => (
                        <Link href={`/${post.slug}`} key={index}>
                            <a>
                                <Post post={post} />
                            </a>
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default Home;
