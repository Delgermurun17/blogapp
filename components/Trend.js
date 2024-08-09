import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Trend() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?page=10&per_page=4")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  return (
    <div className="mx-8">
      <div className="container md:mt-16 mt-0 mx-auto">
        <div className="text-2xl font-bold max-w-[1230px] mx-auto">
          Trending
        </div>
        <div className="flex justify-center mt-[30px]">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {articles.map((item) => (
              <div
                key={item.id}
                className="shadow-lg card bg-base-100 hover:scale-105 duration-500"
              >
                <Image
                  className="relative h-[320px] object-cover rounded-xl"
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
                      href={item.path}
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
    </div>
  );
}
