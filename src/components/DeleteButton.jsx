import { deleteComment } from "../utils/apicalls"


export const DeleteButton = () => {

    const handleDelete = () => {
        deleteComment()
    }


    return <button onClick={handleDelete}>Delete Comment</button>
}