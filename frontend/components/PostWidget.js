import React, { useEffect, useState } from "react";
import { createClient } from "next-sanity";
import moment from "moment/moment";
import imageUrlBuilder from "@sanity/image-url";
import { AssessmentTwoTone } from "@mui/icons-material";
import Link from "next/link";
import { client, imageBuilder } from "../sanity";
import Image from "next/image";

const PostWidget = ({ category, post }) => {
    category = JSON.stringify(category);
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        const query = `*[_type == "category" && name == ${category}]{
        "posts": *[_type == "post" && references(^._id)]{
          title, createAt, featuredImg,slug
        }
      }`;
        client.fetch(query).then((data) => {
            setPosts(
                data[0].posts.filter((item) => {
                    return item.title !== post.title;
                })
            );
        });
    }, [category, post.title]);
    console.log(posts);
    return (
        <div className="flex flex-col gap-4 items-center bg-white h-fit p-4 rounded-lg sticky top-8 text-center">
            <h3 className=" text-lg font-semibold">Related Posts</h3>
            {posts &&
                posts.map((post, index) => (
                    <Link href={post.slug} key={index}>
                        <div className="flex gap-4 items-center cursor-pointer hover:bg-gray-300 p-2 rounded-lg text-md lg:text-xs lg:gap-1 w-full lg:w-40 justify-center">
                            <img
                                width={50}
                                height={50}
                                src={imageBuilder(post.featuredImg)}
                                className=" rounded-full w-10 h-10"
                                alt=""
                            />
                            <div>
                                <p>
                                    {moment(post.createAt).format("MMM Do YY")}
                                </p>
                                <p className=" font-semibold">{post.title}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            {!posts || posts.length == 0 && (
                <h4>No posts related to this blog were found</h4>
            )}
        </div>
    );
};

export default PostWidget;
