import { useState } from "react"
import { fetchArticles } from "../utils/apicalls"

export const PageButtons = ({totalArticles, setArticles, topicQuery, pageNumber, setPageNumber}) => {

    const handleClick = (event) => {
        const page = event.target.id
        setPageNumber(page)
        fetchArticles(page, topicQuery).then((body) => {
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