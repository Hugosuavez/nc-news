import { useState } from "react"
import { deleteComment } from "../utils/apicalls"


export const DeleteButton = ({comment_id}) => {
    
    
    const handleDelete = () => {
        deleteComment(comment_id)
    
    }


    return <button onClick={handleDelete}>Delete Comment</button>
}