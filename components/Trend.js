import { useEffect, useState } from "react";


export function Trend(){

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
        <div>
            {item.tag_list[0]}
        </div>
    )
}