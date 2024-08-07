import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import parse  from "html-react-parser"
import '/styles/globals.css'
import Image from "next/image"
import 'dayjs/locale/mn'
import dayjs from "dayjs";
import Link from "next/link"

export async function generateMetadata({ params }){
    const response = await fetch(`https://dev.to/api/articles/${params.author}/${params.slug}`)
    const article = await response.json( )

    return {
        title: article.title, 
        openGraph: {
            title: article.title,
            description: article.description,
            images: [{ url: article.social_image }],
        }
    }
}

export default async function Page({ params }){
    const response = await fetch(`https://dev.to/api/articles/${params.author}/${params.slug}`)
    const article = await response.json( )
    
    return (
    <main>
        <Header />
        <div className="px-8">
        <div className="max-w-[800px] py-24 mx-auto flex flex-col gap-8">
            <div className="flex flex-col gap-5">
                <div className="font-semibold text-4xl text-[#181a2a]">{article.title}</div>
                <div className="flex gap-6">
                    <div className="flex gap-2 font-medium text-sm text-[#696a75] items-center"><Image src={article.user.profile_image_90} width={28} height={28} className="rounded-[28px]"/>{article.user.name}</div>
                    <div className="font-normal text-sm text-[#696a75] content-center">{dayjs(article.published_at).locale("mn").format("MMMM D, YYYY")}</div>
                </div>
            </div>
            <div><Image className="rounded-xl" src={article.social_image} width={800} height={462}/></div>
            <div className="prose">{parse(article.body_html)}</div>
        </div>
        </div>
        <Footer />
    </main>
    );
}