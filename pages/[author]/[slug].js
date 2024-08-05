import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import parse  from "html-react-parser"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"


export default function Onepost(){
    const [article, setArticle] = useState()
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const { author, slug } = router.query

    useEffect(() => {
        if(router.isReady){
            getArticle()
        }
    }, [router.isReady])

    function getArticle(){
        setLoading(true)

        fetch(`https://dev.to/api/articles/${author}/${slug}`)
        .then((response) => {
            return response.json()
        })
        .then((detail) => {
            setArticle(detail)
            setLoading(false)
        })
    }

    if(!article) return <div className="flex justify-center items-center text-5xl">Loading...</div>

    return (<div>
        <Header />
        <div className="container mx-auto">
            <div>{article.title}</div>
            <div className="prose">{parse(article.body_html)}</div>
        </div>
        <Footer />
        </div>
    )
}