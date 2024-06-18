import { fetchComments } from "../utils/apicalls"

export const CommentPageButtons = ({totalComments, setComments, article_id}) => {
    const handleClick = (event) => {
        const page = event.target.id
        fetchComments(article_id, page).then((body) => {
            setComments(body.data.comments)
        })
    }

    const buttonArray = []
    let totalButtons = totalComments / 10
    let i = 1

    while(totalButtons > 0){
        buttonArray.push(<button id={i} key={i} onClick={handleClick}>{i}</button>)
        totalButtons--
        i++
        
    }
    return (<>{buttonArray}
    <p>Viewing 10 of {totalComments} comments</p></>)
}