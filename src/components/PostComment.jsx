import { useState } from "react"
import { useContext } from 'react'
import { UserContext } from './UserContext'
import { addComment } from '../utils/apicalls'

export const PostComment = ({article_id, setComments}) => {
    const {username} = useContext(UserContext)
    const [newComment, setNewComment] = useState('')

    const handleComment = (event) => {
        setNewComment(event.target.value)
    }

    const submitComment = (event) => {
        event.preventDefault()
        addComment(article_id, username, newComment)
        .then((response) => {
            console.log(response.data.comment)
            setComments((currentComments) => [response.data.comment, ...currentComments])
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (<form className="comment-box">
    <input value={newComment} className="comment-input" type="text" onChange={handleComment}/>
    <button onClick={submitComment}>Post Comment</button>
    </form>)
}