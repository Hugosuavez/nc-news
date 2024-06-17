import { useState } from "react"
import { fetchArticles } from "../utils/apicalls"

export const PageButtonCard = ({totalArticles, setArticles}) => {
    const handleClick = (event) => {
        fetchArticles(event.target.id).then((body) => {
            setArticles(body.data.articles)
        })
    }

    const buttonArray = []
    let totalButtons = totalArticles / 10
    let i = 1

    while(totalButtons > 0){
        buttonArray.push(<button id={i} key={i} onClick={handleClick}>{i}</button>)
        totalButtons--
        i++
        
    }
    return (<>{buttonArray}
    <p>Viewing 10 of {totalArticles} articles</p></>)
}