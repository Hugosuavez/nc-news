import { useEffect, useState } from "react"
import { fetchArticles } from "../utils/apicalls"
import { ArticleCards } from "./ArticleCards"
import { PageButtons } from "./Pagebuttons"
import { useSearchParams } from "react-router-dom"

export const Articles = ({articles, setArticles}) => {

    const [totalArticles, setTotalArticles] = useState(0)
    const [loading, setLoading] = useState(true)
    const [pageNumber, setPageNumber]= useState(1)
    const [searchParams, setSearchParams] = useSearchParams()
    const topic = searchParams.get("topic")
    useEffect(() => {
        const page = 1
        fetchArticles(page, topic)
        .then((body) => {
            setLoading(false)
            setArticles(body.data.articles)
            setTotalArticles(body.data.total_count)
            setPageNumber(1)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [topic])
    
    if(loading){return <p>Loading...</p>}

    return (<><ul className="article-list"><ArticleCards articles={articles}/></ul>
            <PageButtons totalArticles={totalArticles} setArticles={setArticles} topic={topic} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    </>)
}