import { useState } from "react"
import { useContext } from 'react'
import { UserContext } from './UserContext'
import { addComment } from '../utils/apicalls'

export const PostComment = ({article_id, setComments}) => {
    const {username} = useContext(UserContext)
    const [newComment, setNewComment] = useState('')
    const [err, setErr] = useState(null)
    const [buttonDisabled, setButtonDisabled] = useState()

    const handleComment = (event) => {
        setNewComment(event.target.value)
        setErr(null)
    }

    const submitComment = (event) => {
        event.preventDefault()
        if(!newComment){setErr('Please write a comment...')}
        else
        setButtonDisabled(true)
        {addComment(article_id, username, newComment)
        .then((response) => {
            setButtonDisabled(false)
            setNewComment('')
            console.log(response.data.comment)
            setComments((currentComments) => [response.data.comment, ...currentComments])
        })
        .catch((err) => {
            setErr('Something went wrong, please try again...')
        })}
    }
    if(username)
   {return (<form className="comment-box">
    <input value={newComment} className="comment-input" type="text" required onChange={handleComment} />
    {buttonDisabled ? <button onClick={submitComment} disabled>Post Comment</button> : <button onClick={submitComment}>Post Comment</button>}
    {err ? <p className='error-message'>{err}</p> : null}
    </form>)
}}