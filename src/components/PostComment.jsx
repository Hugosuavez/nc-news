import { useState } from "react"
import { useContext } from 'react'
import { UserContext } from './UserContext'


export const PostComment = ({article_id}) => {
    const {username} = useContext(UserContext)
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