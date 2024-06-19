import { DeleteButton } from "./DeleteButton"
import { useContext, useState } from 'react'
import { UserContext } from './UserContext'

export const CommentCards = ({comments, setComments}) => {
   
    const {username} = useContext(UserContext)

    return comments.map((comment) => {
        const date = new Date(comment.created_at).toDateString()
        return (<li className="article-card" key={comment.comment_id}>
            <h4 id="comment-title">{comment.author} | {date}</h4>
            <p>{comment.body}</p>
            <button>Votes: {comment.votes}</button>
            {comment.author === username ? <DeleteButton comment_id={comment.comment_id} setComments={setComments} comments={comments}/> : null} 
        </li>)
    })
}