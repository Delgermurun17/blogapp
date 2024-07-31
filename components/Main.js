import Blog from "./Blog";
import { Hero } from "./Hero";
import { Trend } from "./Trend";

export function Main(){
    return(
        <div className="flex flex-col gap-[100px]">
            <Hero />
            <Trend />
            <Blog />
        </div>
    )
}