import { useEffect, useState } from "react"
import { fetchArticles } from "../utils/apicalls"
import { ArticleCards } from "./ArticleCards"
import { PageButtons } from "./Pagebuttons"
export const Articles = ({articles, setArticles, topicQuery}) => {

    const [totalArticles, setTotalArticles] = useState(0)
    const [loading, setLoading] = useState(true)
    
    
    useEffect(() => {
        const page = 1
        fetchArticles(page, topicQuery)
        .then((body) => {
            console.log(body)
            setLoading(false)
            setArticles(body.data.articles)
            setTotalArticles(body.data.total_count)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [topicQuery])
    
    if(loading){return <p>Loading...</p>}

    return (<><ul className="article-list"><ArticleCards articles={articles}/></ul>
            <PageButtons totalArticles={totalArticles} setArticles={setArticles} topicQuery={topicQuery}/>
    </>)
}