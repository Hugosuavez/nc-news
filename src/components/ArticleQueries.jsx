import { useNavigate } from "react-router-dom"

export const ArticleQueries = () => {
    const navigate = useNavigate()

    const handleClick = (event) => {
        navigate(`/api/articles${event.target.value}`)
    }
    
    return <nav>
       <legend> {'Sort by '}
        <select className="dropdown" onClick={handleClick}>
            <option value="?sort_by=created_at" >Most recent</option>
            <option value="?sort_by=created_at&order=ASC">Oldest First</option>
            <option value="?sort_by=comment_count">Most Comments</option>
            <option value="?sort_by=comment_count&order=ASC">Least Comments</option>
            <option value="?sort_by=votes">Most Votes</option>
            <option value="?sort_by=votes&order=ASC">Least Votes</option>
        </select>
       </legend>
       </nav>
}