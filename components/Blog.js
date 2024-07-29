import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"

export default function Blog(){

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("https://dev.to/api/articles?username=paul_freeman")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setArticles(data);
        })
    }, []);

    return (<div className="w-[1216px] mx-auto">
        <div className="container mx-auto">
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                {articles.map((item) => (
                    <div key={item.id} className="shadow-lg card bg-base-100">
                        <div className="card-body">
                        <Link href={item.url} target="_blank">
                        <Image href={item.url} target="_blank" className="hover:scale-105 duration-500 rounded-md mb-2" alt="" src={item.social_image} width={500} height={500}/></Link>
                        <button disabled className="bg-blue-50 text-blue-500 rounded-md px-[10px] py-1 w-fit hover:bg-blue-500 hover:text-blue-50 duration-300">{item.tag_list[0]}</button>
                        <Link href={item.url} target="_blank">
                                <div>{item.title}</div></Link>
                            <div className="flex">
                                <div>{item.published_at}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}