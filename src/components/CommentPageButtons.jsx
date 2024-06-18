import { fetchComments } from "../utils/apicalls"
import { useState } from "react"

export const CommentPageButtons = ({totalComments, setComments, article_id}) => {
   
    const [pageNumber, setPageNumber]= useState(1)
    const handleClick = (event) => {

        const page = event.target.id
        setPageNumber(page)

        fetchComments(article_id, page).then((body) => {
            setComments(body.data.comments)
        })
    }

    const buttonArray = []
    const pages = Math.ceil(totalComments / 10)
    
    let totalButtons = totalComments / 10
    let i = 1

    while(totalButtons > 0){
        buttonArray.push(<button id={i} key={i} onClick={handleClick}>{i}</button>)
        totalButtons--
        i++
    }

    return (<>{buttonArray}
    <p>Viewing page {pageNumber} of {pages}</p>
    </>)
}