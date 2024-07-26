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
                            <Image className="rounded-md" alt="" src={item.social_image} width={1000} height={1000}/>
                            </Link>
                </div>
            ))}
        </div>

        </div>
    )
}