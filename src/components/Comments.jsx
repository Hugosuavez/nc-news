import { useState, useEffect } from "react"
import { fetchComments } from "../utils/apicalls"
import { CommentCards } from "./CommentCards"
import { CommentPageButtons } from "./CommentPageButtons";
import { PostComment } from "./PostComment";
export const Comments = ({article_id, totalComments}) => {
    
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
    <PostComment article_id={article_id} setComments={setComments} />
    <ul>{<CommentCards comments={comments} setComments={setComments} />}</ul>
    <CommentPageButtons totalComments={totalComments} article_id={article_id}/>
    </>)
}