import { useState, useEffect } from "react"
import { fetchComments } from "../utils/apicalls"
import { CommentCards } from "./CommentCards"
import { CommentPageButtons } from "./CommentPageButtons";
import { PostComment } from "./PostComment";
import { ErrorPage } from "./ErrorPage";


export const Comments = ({article_id, totalComments}) => {
    
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchComments(article_id)
        .then((response) => {
            setLoading(false)
            setComments(response.data.comments)
            
        })
        .catch((err) => {
            setLoading(false)
            setError(err)
        })
    }, [article_id])

    if(loading){return <p>Loading...</p>}
    if(error){return <ErrorPage error={error}/>}
    return (<>
    <PostComment article_id={article_id} setComments={setComments} />
    <ul>{<CommentCards comments={comments} setComments={setComments}/>}</ul>
    <CommentPageButtons totalComments={totalComments} setComments={setComments}  article_id={article_id}/>
    </>)
}