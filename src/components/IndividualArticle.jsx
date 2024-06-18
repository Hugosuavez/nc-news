import { useParams } from "react-router-dom";
import { fetchIndividualArticle } from "../utils/apicalls";
import { useEffect, useState } from "react";


export const IndividualArticle = () => {
const {article_id} = useParams()
const [article, setArticle] = useState([])
const [loading, setLoading] = useState(false)
const number = Number(article_id)
useEffect(() => {

    setLoading(true)

    fetchIndividualArticle(number).then((response) => {
        setLoading(false)
        setArticle(response.data.article)
})
}, [article_id])

if(loading){return <p>Loading...</p>}

const date = new Date(article.created_at).toDateString()

return (<div className='individual-article'>
<h2>{article.title} by {article.author}</h2>
<img width='200px' src={article.article_img_url} alt="" />
<p>{article.body}</p>
<p>{date}</p>
<button>Votes: {article.votes}</button>
<button>Comments: {article.comment_count}</button>

</div>)
}