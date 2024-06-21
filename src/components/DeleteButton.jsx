
import { deleteComment } from "../utils/apicalls"
import { toast } from 'react-toastify'
export const DeleteButton = ({comment_id, comments, setComments}) => {
   
    const handleDelete = () => {

        const newComments = comments.filter((comment) => {
            return comment.comment_id !== comment_id
        })
        setComments(newComments)
        deleteComment(comment_id)
        .then((response) =>   toast.success("Comment deleted!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        }))
        .catch((err) => toast.error("Something went wrong!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        }))
            
    }
    
    return <button onClick={handleDelete}>Delete Comment</button>
   
}