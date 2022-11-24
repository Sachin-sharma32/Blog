import React from "react";
import { useRouter } from "next/router";
import { createClient } from "next-sanity";
import Post from "../../components/Post";
import Link from "next/link";
import { client } from "../../sanity";

const Search = ({ posts }) => {
    const router = useRouter();
    const { search } = router.query;

    const searchTerm = search.toString().toLowerCase();

    const filteredPosts = posts.filter((post) => {
        const title = post.title.toLowerCase();
        return title.includes(searchTerm);
    });

    return (
        <div>
            <div className="px-10 mb-8  grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-10 xl:gird-col-4">
                {filteredPosts.map((post, index) => (
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

export default Search;

export async function getServerSideProps() {
    //? FETCH REFERENCE
    const query = `*[_type=="post"]{
  title,
  featuredImg,
  slug,
  excerpt,
  "category": *[_type=='category' && references(^._id)],
  "author": *[_type=='author' && references(^._id)]{
    name,
    image
  }
}`;
    const posts = await client.fetch(query);
    return {
        props: {
            posts,
        },
    };
}
