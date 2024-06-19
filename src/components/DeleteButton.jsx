
import { deleteComment } from "../utils/apicalls"


export const DeleteButton = ({comment_id, comments, setComments}) => {
   
    const handleDelete = () => {
        const newComments = comments.filter((comment) => {
            return comment.comment_id !== comment_id
        })
        setComments(newComments)
        deleteComment(comment_id)
    }
 
    

    return <button onClick={handleDelete}>Delete Comment</button>
}