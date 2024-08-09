import Blog from "./Blog";
import { Hero } from "./Hero";
import { Trend } from "./Trend";

export function Main() {
  return (
    <div className="flex flex-col md:gap-[100px] gap-0">
      <Hero />
      <Trend />
      <Blog />
    </div>
  );
}
