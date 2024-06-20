import { useEffect, useState } from "react"
import { fetchArticles } from "../utils/apicalls"
import { ArticleCards } from "./ArticleCards"
import { PageButtons } from "./Pagebuttons"
import { useSearchParams } from "react-router-dom"
import { ArticleQueries } from './ArticleQueries'
export const Articles = ({articles, setArticles}) => {

    const [totalArticles, setTotalArticles] = useState(0)
    const [loading, setLoading] = useState(true)
    const [pageNumber, setPageNumber]= useState(1)

    const [searchParams, setSearchParams] = useSearchParams()
    const topicQuery = searchParams.get("topic")
    const sortByQuery = searchParams.get("sort_by")
    const orderQuery = searchParams.get("order")
    
    

    useEffect(() => {
        const page = 1
        fetchArticles(page, topicQuery, sortByQuery, orderQuery)
        .then((body) => {
            setLoading(false)
            setArticles(body.data.articles)
            setTotalArticles(body.data.total_count)
            setPageNumber(1)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [topicQuery, sortByQuery, orderQuery])
    
    if(loading){return <p>Loading...</p>}

    return (<><ArticleQueries />
    <ul className="article-list"><ArticleCards articles={articles}/></ul>
            <PageButtons totalArticles={totalArticles} setArticles={setArticles} topicQuery={topicQuery} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    </>)
}