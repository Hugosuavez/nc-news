// import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"
// import { fetchArticles } from "../utils/apicalls"

// export const ArticlesOnTopic = () => {
//     const { topic } = useParams()
//      console.log(topic)
//     const [articlesByTopic, setArticlesByTopic] = useState([])


//         useEffect(() => {
//             fetchArticles(topic).then((response) => {
//                 console.log(response)
//             })
//         }, [])
//         return 'hello'
//     }