import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/mn";

export function Hero() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=paul_freeman&per_page=1")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArticles(data);
      });
  }, []);
  return (
    <div className="flex justify-center">
      <div className="container flex justify-center">
        {articles.map((item) => (
          <div key={item.id} className="hidden md:block relative">
            <Link href={item.path}>
              <Image
                className="rounded-xl"
                alt="image"
                src={item.social_image}
                width={1216}
                height={600}
              ></Image>
            </Link>
            <div className="shadow-lg card bg-base-100 w-[398px] xl:w-[598px] lg:w-[498px] absolute bottom-2 left-2">
              <div className="card-body">
                <button
                  disabled
                  className="bg-blue-50 text-blue-500 rounded-md px-[10px] py-1 w-fit hover:bg-blue-500 hover:text-blue-50 duration-300 "
                >
                  {item.tag_list[0]}
                </button>
                <div>
                  <Link
                    className="hover:text-blue-600 duration-300"
                    href={item.path}
                  >
                    {item.title}
                  </Link>
                </div>
                <div className="flex">
                  <div>
                    {dayjs(item.published_at)
                      .locale("mn")
                      .format("MMMM D, YYYY")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
