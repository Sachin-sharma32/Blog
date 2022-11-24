import Link from "next/link";
import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Router from "next/router";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import CategoryBox from "./CategoryBox";
import { client } from "../sanity";
import { useDispatch } from "react-redux";
import { addCategories, addPosts } from "../redux/slices";

const Header = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [toggleCategories, setToggleCategories] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const queryCategory = `*[_type == "category"]{
                name,
                slug,
                "post": *[_type=='post' && references(^._id)]{
                    title,slug,excerpt,content,featuredImg,
                    'author':*[_type=='author' && references(^._id)]{
                        name,bio,image
                    }
                }
            }`;
            const queryPost = `*[_type=="post"]{
                title,
                featuredImg,
                slug,
                excerpt,
                content,
                "author": *[_type=='author' && references(^._id)]{
                    name, image
                },
                "category": *[_type=='category' && references(^._id)]{
                    name
                }
              }`;
            const categoryData = await client.fetch(queryCategory);
            const postData = await client.fetch(queryPost);
            dispatch(addCategories(categoryData));
            dispatch(addPosts(postData));
        };
        fetchData();
    }, []);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        Router.push(`/search/${searchTerm}`);
    };

    return (
        <div className=" px-2 sm:px-10 pt-4 flex justify-between items-center border-b-2 border-green-200 pb-4">
            <Link href="/">
                <a className=" text-xl font-semibold text-green-900">
                    SachinCoding
                </a>
            </Link>
            <div className=" flex gap-6 text-green-700 hover:text-green-500 relative">
                <button
                    className="flex items-center cursor-pointer"
                    onClick={() => {
                        setToggleCategories((current) => !current);
                    }}
                >
                    <h5 className=" text-sm font-semibold">Categories</h5>
                    {toggleCategories ? (
                        <ArrowDropUpIcon />
                    ) : (
                        <ArrowDropDownIcon />
                    )}
                </button>
                {toggleCategories && <CategoryBox setToggleCategories={setToggleCategories}/>}
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className=" bg-green-100 border-green-300 border-2 outline-none px-2"
                    onChange={handleChange}
                    placeholder="Search"
                />
            </form>
        </div>
    );
};

export default Header;
