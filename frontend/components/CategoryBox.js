import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const CategoryBox = ({ setToggleCategories }) => {
    const categories = useSelector((state) => state.base.categories);
    return (
        <div className=" absolute top-10 -left-12 shadow-lg p-4 flex flex-col items-center justify-center gap-4 rounded-lg z-10 bg-white">
            {categories &&
                categories.map((item, index) => {
                    return (
                        <Link href={`/category/${item.name}`} key={index}>
                            <a
                                className=" text-green-500 hover:text-white transition-all duration-150 hover:bg-green-500 p-2 w-full text-center rounded-lg"
                                onClick={() => {
                                    setToggleCategories(false);
                                }}
                            >
                                {item.name}
                            </a>
                        </Link>
                    );
                })}
        </div>
    );
};

export default CategoryBox;
