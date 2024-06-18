
export const CommentCards = ({comments}) => {
    return comments.map((comment) => {
        const date = new Date(comment.created_at).toDateString()
        return (<li className="article-card" key={comment.comment_id}>
            <h4>{comment.author} | {date}</h4>
            <p>{comment.body}</p>
            <button>Votes: {comment.votes}</button>
        </li>)
    })
}