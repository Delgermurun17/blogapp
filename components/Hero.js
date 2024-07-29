import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Hero(){
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("https://dev.to/api/articles?username=delgermurun17")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setArticles(data);
        })
    }, []);
    return (
        
        <div className="flex justify-center">
            <div className="container flex justify-center">{articles.map((item) => (
                <div key={item.id} className="">
                            <Link href={item.url} target="_blank">
                            <Image className="rounded-xl" alt="" src={item.social_image} width={1216} height={600}></Image></Link>
                            <div className="shadow-lg card bg-base-100 w-[598px]">
                                <div className="card-body ">
                                <button disabled className="bg-blue-50 text-blue-500 rounded-md px-[10px] py-1 w-fit hover:bg-blue-500 hover:text-blue-50 duration-300">{item.tag_list[0]}</button>
                                <Link href={item.url} target="_blank">
                                {item.title}</Link>
                                    <div className="flex"><div>{item.published_at}</div></div>  
                                </div>
                            </div>
                </div>
            ))}
        </div>

        </div>
    )
}