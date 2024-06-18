import { useEffect, useState } from "react"
import { fetchArticles } from "../utils/apicalls"
import { ArticleCards } from "./ArticleCards"
import { PageButtons } from "./Pagebuttons"
export const Articles = ({articles, setArticles}) => {

    const [totalArticles, setTotalArticles] = useState(0)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        fetchArticles()
        .then((body) => {
            setLoading(false)
            setArticles(body.data.articles)
            setTotalArticles(body.data.total_count)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
    
    if(loading){return <p>Loading...</p>}

    return (<><ul className="article-list"><ArticleCards articles={articles}/></ul>
            <PageButtons totalArticles={totalArticles} setArticles={setArticles}/>
    </>)
}