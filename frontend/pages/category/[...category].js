import Post from "../../components/Post";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Category() {
    const router = useRouter();
    const { category } = router.query;
    console.log(category);

    const categories = useSelector((state) => state.base.categories);
    console.log(categories);

    let cat;
    if (categories) {
        cat = categories.find((item) => {
            return item.name === category[0];
        });
    }
    console.log(cat);

    return (
        //? SPACING
        <div className="flex flex-col items-center mt-10">
            {cat && (
                <>
                    <div className=" text-3xl text-green-700">{category}</div>
                    <div className="flex mt-10">
                        <div className="px-10 mb-8 gap-6 grid grid-cols-1 sm:grid-cols-2 justify-items-center lg:grid-cols-3">
                            {cat &&
                                cat.post.map((item, index) => (
                                    <Link href={`/${item.slug}`} key={index}>
                                        <a>
                                            <Post post={item} />
                                        </a>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
