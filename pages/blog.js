import { Header } from "@/components/Header";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"
import 'dayjs/locale/mn'
import { Footer } from "@/components/Footer";

const pageSize = 12

export default function Blog(){

    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [ended, setEnded] = useState(false);

    useEffect(() => {
        loadMore();
    }, []);

    function loadMore(){
        fetch(`https://dev.to/api/articles?username=paul_freeman&page=${page}&per_page=${pageSize}`)
        .then((response) => {
            return response.json();
        })
        .then((newArticles) => {
            const updateArticles = articles.concat(newArticles)
            setArticles(updateArticles);
            setPage(page + 1)
            if(newArticles.length < pageSize){
                setEnded(true)
            }
        })
    }

    return (<div className="">
        <Header />
        <div className="mx-8">
        <div className="flex flex-col mx-auto gap-10 container">
        <div className="text-2xl font-bold"><div className="max-w-[1216px] mx-auto">All Blog Post</div></div>
        <div className="flex flex-col items-center max-w-[1216px] mx-auto">
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                {articles.map((item) => (
                    <div key={item.id} className="shadow-lg card bg-base-100">
                        <div className="card-body">
                            <Link href={item.path}>
                            <Image className="hover:scale-105 duration-500 rounded-md mb-2" alt="" src={item.social_image} width={500} height={500}/></Link>
                            <button disabled className="bg-blue-50 text-blue-500 rounded-md px-[10px] py-1 w-fit hover:bg-blue-500 hover:text-blue-50 duration-300">{item.tag_list[0]}</button>
                            <div><Link className="hover:text-blue-600 duration-300" href={item.path}>
                            {item.title}</Link></div>
                            <div className="flex items-center space-x-20">
                                <div className="flex items-center">
                                <Image src={item.user.profile_image_90} width={36} height={36}/>
                                <div>{item.user.name}</div></div>
                                <div>{dayjs(item.published_at).locale("mn").format("MMMM D, YYYY")}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        {!ended && (
            <div className="flex justify-center py-10">
                <button onClick={loadMore} className="rounded-md border border-gray-500 text-gray-500 p-[12px_20px] bg-white flex hover:bg-gray-100 duration-200">Load More</button>
            </div>
        )}</div></div>
        <div className="mt-20"><Footer /></div>
        </div>
    )
}