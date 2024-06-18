import { useState } from "react"


export const PostComment = ({article_id}) => {

    const [comment, setComment] = useState('')

    const handleComment = (event) => {
        setComment(event.target.value)
    }

    const submitComment = () => {
        
    }

    return (<form className="comment-box">
    <input value={comment} className="comment-input" type="text" onChange={handleComment}/>
    <button onClick={submitComment}>Post Comment</button>
    </form>)
}