import moment from "moment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PostWidget from "../components/PostWidget";
import serializerFn from "../utils/serialiser";
const BlockContent = require("@sanity/block-content-to-react");
import { client, imageBuilder } from "../sanity";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Article = () => {
    const router = useRouter();
    const { slug } = router.query;
    console.log(slug);
    const posts = useSelector((state) => state.base.posts);
    console.log(posts);
    let post;
    if (posts) {
        post = posts.find((item) => {
            return item.slug === slug[0];
        });
        console.log(post);
    }
    let date;
    {
        post && (date = post.createAt);
    }
    return (
        <div>
            {post && (
                <div className="flex p-2 gap-4 flex-col sm:p-6 sm:gap-6 md:p-10 md:gap-10 lg:flex-row">
                    <div className=" w-[100%] mx-auto pb-10 bg-white flex flex-col gap-2 text-gray-500 rounded-lg overflow-hidden">
                        <img
                            src={imageBuilder(post.featuredImg)}
                            alt=""
                            className=" w-full h-100 relative"
                        />
                        <div className=" px-10">
                            <div className=" flex gap-20 mb-4 items-center">
                                <div className="flex items-center gap-2">
                                    <img
                                        src={imageBuilder(post.author[0].image)}
                                        alt=""
                                        className="w-10 rounded-full h-10"
                                    />
                                    <h5>{post.author[0].name}</h5>
                                </div>
                                <div className="flex gap-2">
                                    <CalendarMonthIcon className=" text-green-500" />
                                    <p>{moment(date).format("MMM Do YY")}</p>
                                </div>
                            </div>
                            <div className=" mt-10 text-black">
                                <h1 className=" w-full text-center text-4xl font-bold mb-5">
                                    {post.title}
                                </h1>
                                <div className=" leading-8">
                                    <BlockContent
                                        blocks={post.content}
                                        projectId="skIwiRtAa56fscMy4Hairiay84b1KcaNCVpUDA5vsQHTduaaNBVHoanyAQ5471WXcIHDwmnsL12vO2Yt6CFIjcAx1OZcV7XSGmmecopiCqVN3XxQXskTU5kdihF25cg4FYGDD3JbObU3DY4t1vsNd7f67PcHu2xmBjrkQqgJsRTAzdLVA9nA"
                                        dataset="production"
                                        serializers={serializerFn()}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <PostWidget category={post.category[0].name} post={post}/>
                </div>
            )}
        </div>
    );
};

export default Article;
