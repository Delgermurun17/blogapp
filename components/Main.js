import Blog from "./Blog";
import { Hero } from "./Hero";
import { Trend } from "./Trend";

export function Main(){
    return(
        <div>
            <Hero />
            <Trend />
            <Blog />
        </div>
    )
}