import { useNavigate } from "react-router-dom"

export const ArticleQueries = () => {
    const navigate = useNavigate()
    const handleClick = (event) => {
        
        navigate(`/api/articles${event.target.value}`)
    }
    const handleOrder = (event) => {
        navigate(`/api/articles${event.target.value}`)
    }

    return <nav>
       
        <select onClick={handleClick}>
            <option value="?sort_by=created_at" >date</option>
            <option value="?sort_by=comment_count">comments</option>
            <option value="?sort_by=votes">Votes</option>
        </select>
        
       <legend>{'Order by: '}
        <select onClick={handleOrder}>
            <option value="?order=ASC">Ascending</option>
            <option value="?order=DESC">Descending</option>
        </select>
        </legend>
        </nav>

}