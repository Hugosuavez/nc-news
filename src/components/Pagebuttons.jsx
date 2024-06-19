import { useState } from "react"
import { fetchArticles } from "../utils/apicalls"

export const PageButtons = ({totalArticles, setArticles, topicQuery}) => {

    const [pageNumber, setPageNumber]= useState(1)
    
    const handleClick = (event) => {
        const page = event.target.id
        setPageNumber(page)
        fetchArticles(page, topicQuery).then((body) => {
            console.log(body.data.articles)
            setArticles(body.data.articles)
        })
    }

    const buttonArray = []
    const pages = Math.ceil(totalArticles / 10)

    let totalButtons = totalArticles / 10
    let i = 1

    while(totalButtons > 0){
        buttonArray.push(<button id={i} key={i} onClick={handleClick}>{i}</button>)
        totalButtons--
        i++
        
    }
    return (<>{buttonArray}
    <p>Viewing page {pageNumber} of {pages}</p>
    <p>Total Results {totalArticles}</p></>)
}