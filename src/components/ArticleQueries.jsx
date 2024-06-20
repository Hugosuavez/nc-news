import { useNavigate } from "react-router-dom"

export const ArticleQueries = () => {
    const navigate = useNavigate()
    const handleClick = (event) => {
        console.log(event.target.value)
        navigate(`/api/articles${event.target.value}`)
    }

    return <nav>
       
        <select onClick={handleClick}>
            <option key={'created_at'}value={"?sort_by=created_at"} >date</option>
            <option value="?sort_by=comment_count">comments</option>
            <option value=""></option>
        </select>
        
       <legend>{'Order by: '}
        <select name="" id="">
            <option value=""></option>
            <option value=""></option>
        </select>
        </legend>
        </nav>

}