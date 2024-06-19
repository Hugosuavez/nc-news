import { useEffect, useState } from "react"
import { fetchArticles, fetchTopics } from "../utils/apicalls"

export const TopicButtons = ({setArticles}) => {
    const [topics, setTopics] = useState([])

    useEffect(()=> {
        fetchTopics().then((response) => {
            setTopics(response.data.topics)
        })
    }, [])

    const handleTopic = (event) => {
        const page = 1
        const slug = event.target.id
       fetchArticles(page, slug).then((response) => {
        
        setArticles(response.data.articles)
       })
    }

    const buttons = topics.map((topic) => {
        return <button key={topic.slug} className="nav-button" id={topic.slug} onClick={handleTopic}>{topic.description}</button>  })
    const allArticles = <button className="nav-button" id={''} onClick={handleTopic}>All Articles</button>   
    return <>
    {allArticles}
    {buttons}
    </>
        
   

}