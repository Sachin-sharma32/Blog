import moment from "moment/moment";
import { client, imageBuilder } from "../sanity";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Post = ({ post }) => {
    console.log(post)
    return (
        <div className=" bg-green-200 max-w-md rounded-lg overflow-hidden text-center flex flex-col gap-2 text-gray-500 hover:scale-110 transition-all duration-150 cursor-pointer h-[550px]">
            {post && (
                <>
                    <img src={imageBuilder(post.featuredImg)} alt="" className=" h-52"/>
                    <h3 className=" text-4xl text-black font-semibold">
                        {post.title}
                    </h3>
                    <div className="flex mx-auto items-center gap-1">
                        <div className=" w-10 h-10 overflow-hidden rounded-full">
                            <img
                                src={imageBuilder(post.author[0].image)}
                                alt=""
                                className=" w-10 rounded-full"
                            />
                            ''
                        </div>
                        <h3 className=" text-sm font-semibold">
                            {post.author[0].name}
                        </h3>
                    </div>
                    <p className="flex flex-row justify-center items-center gap-1 text-sm">
                        <span>
                            <CalendarMonthIcon />
                        </span>
                        {moment().format("Do MMM YY")}
                    </p>
                    <p className="p-4">{post.excerpt}</p>
                </>
            )}
        </div>
    );
};

export default Post;
