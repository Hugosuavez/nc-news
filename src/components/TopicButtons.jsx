import { useEffect, useState } from "react"
import { fetchArticles, fetchTopics } from "../utils/apicalls"

export const TopicButtons = ({setArticles, setTopicQuery}) => {
    const [topics, setTopics] = useState([])

    useEffect(()=> {
        fetchTopics().then((response) => {
            setTopics(response.data.topics)
        })
    }, [])

    const handleTopic = (event) => {
       setTopicQuery(event.target.id)
    }

    const buttons = topics.map((topic) => {
        return <button key={topic.slug} className="nav-button" id={topic.slug} onClick={handleTopic}>{topic.description}</button>  })
    const allArticles = <button className="nav-button" id={''} onClick={handleTopic}>All Articles</button>   
    return <>
    {allArticles}
    {buttons}
    </>
        
   

}