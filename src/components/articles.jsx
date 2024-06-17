import { useEffect, useState } from "react"
import { fetchArticles } from "../utils/apicalls"
import { ArticleCard } from "./articlecards"
import { PageButtonCard } from "./pagebuttons"

export const Articles = ({articles, setArticles}) => {

    const [totalArticles, setTotalArticles] = useState(0)
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
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

    return (<><ul className="article-list"><ArticleCard articles={articles}/></ul>
            <PageButtonCard totalArticles={totalArticles} setArticles={setArticles}/>
    </>)
}