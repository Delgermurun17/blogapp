import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import 'dayjs/locale/mn';

const pageSize = 9;
const tags = [
    {value: "all", name: "Бүгд"},
    {value: "beginners", name: "Анхан шат"},
    {value: "frontend", name: "Front-end"},
    {value: "javascript", name: "JavaScript"},
    {value: "webdev", name: "Web Dev"},
];

export default function Blog() {
    const [selectedTag, setSelectedTag] = useState("all");
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [ended, setEnded] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadMore();
    }, [selectedTag]);

    async function loadMore() {
        if (loading) return;

        setLoading(true);

        try {
            const response = await fetch(`https://dev.to/api/articles?username=paul_freeman&page=${page}&per_page=${pageSize}${selectedTag !== "all" ? `&tag=${selectedTag}` : ''}`);
            const newArticles = await response.json();
            
            if (!response.ok) {
                throw new Error();
            }

            const updateArticles = [...articles, ...newArticles];
            setArticles(updateArticles);
            setPage(prevPage => prevPage + 1);
            setEnded(newArticles.length < pageSize);
        } catch (error) {
            console.error('', error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="mx-8">
            <div className="container mx-auto">
                <div className="text-2xl font-bold max-w-[1230px] mx-auto">All Blog Posts</div>
                <div className="flex justify-between max-w-[1230px] mx-auto pt-10">
                    <div className="flex gap-5">
                        {tags.map((tag) => (
                            <div
                                key={tag.value}
                                className={`cursor-pointer hover:text-[#cea072] text-[#495057] font-bold text-[12px] leading-[25px] duration-200 ${selectedTag === tag.value ? "text-[#D4A373]" : ""}`}
                                onClick={() => {
                                    setSelectedTag(tag.value);
                                    setArticles([]);
                                    setPage(1); 
                                    setEnded(false);
                                }}
                            >
                                {tag.name}
                            </div>
                        ))}
                    </div>
                    <div><Link href={"/blog"}>View All</Link></div>
                </div>
                <div className="max-w-[1216px] mx-auto">
                    <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                        {articles.map((item) => (
                            <div key={item.id} className="shadow-lg card bg-base-100">
                                <div className="card-body">
                                    <Link href={item.path}>
                                            <Image
                                                className="hover:scale-105 duration-500 rounded-md mb-2"
                                                alt={item.title}
                                                src={item.social_image}
                                                width={500}
                                                height={500}
                                            />
                                    </Link>
                                    <button disabled className="bg-blue-50 text-blue-500 rounded-md px-[10px] py-1 w-fit hover:bg-blue-500 hover:text-blue-50 duration-300">
                                        <div>{item.tag_list[0]}</div>
                                    </button>
                                    <div>
                                        <Link className="hover:text-blue-600 duration-300" href={item.url}>
                                            {item.title}
                                        </Link>
                                    </div>
                                    <div className="flex">
                                        <div>{dayjs(item.published_at).locale("mn").format("MMMM D, YYYY")}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {!ended && (
                        <div className="flex justify-center py-10">
                            <button onClick={loadMore} className="rounded-md border border-gray-500 text-gray-500 p-[12px_20px] bg-white flex hover:bg-gray-100 duration-200">
                                Load More
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
