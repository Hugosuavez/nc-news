import { useState, useEffect } from "react"
import { fetchComments } from "../utils/apicalls"
import { CommentCards } from "./CommentCards"
import { CommentPageButtons } from "./CommentPageButtons";

export const Comments = ({article_id,totalComments}) => {
    
    const [loading, setLoading] = useState(true)
    const [comments, setComments] = useState([])


    useEffect(() => {
        fetchComments(article_id)
        .then((response) => {
            setLoading(false)
            setComments(response.data.comments)
            
        })
    }, [article_id])

    if(loading){return <p>Loading...</p>}
    return (<>
    
    <ul>{<CommentCards comments={comments} />}</ul>
    <CommentPageButtons totalComments={totalComments} setComments={setComments} article_id={article_id}/>
    </>)
}