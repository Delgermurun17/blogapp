import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Trend() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("https://dev.to/api/articles?username=paul_freeman")
            .then((response) => response.json())
            .then((data) => {
                setArticles(data);
            });
    }, []);

    const limitedArticles = articles.slice(0, 4);


    return (
        <div className="max-w-[1280px] mt-16 mx-auto">
            <div className="text-2xl font-bold">Trending</div>
            <div className="flex justify-center mt-[30px]">
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-8">
                    {limitedArticles.map((item) => (
                        <div key={item.id} className="shadow-lg card bg-base-100">
                            <Image
                                className="relative h-[298px] object-cover rounded-xl"
                                src={item.social_image}
                                width={289}
                                height={320}
                                alt={item.title}
                            />
                            <div className="absolute bottom-7 left-7 ">
                                <button
                                    disabled
                                    className="hover:bg-blue-50 hover:text-blue-500 mb-4 rounded-md px-[10px] py-1 w-fit bg-blue-500 text-blue-50 duration-300"
                                >
                                    {item.tag_list[0]}
                                </button>
                                <div>
                                    <Link
                                        className="hover:text-blue-600 duration-300 text-white"
                                        href={item.url}
                                        target="_blank"
                                    >
                                        {item.title}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
