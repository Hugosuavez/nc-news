

export const ArticleQueries = ({setSearchParams, searchParams}) => {
    
    const handleChange = (event) => {
        if(event.target.value === 'ASC' || event.target.value === 'DESC'){
            const newParams = new URLSearchParams(searchParams)
        newParams.set('order', event.target.value)
        setSearchParams(newParams)
        }
        
        else { const newParams = new URLSearchParams(searchParams)
        newParams.set('sort_by', event.target.value)
        setSearchParams(newParams)}
    }
    
    return <nav className="query">
       <legend> {'Sort by '}
        <select className="dropdown" onChange={handleChange}>
            <option value="created_at" >Date</option>
            <option value="comment_count">Comments</option>
            <option value="votes">Votes</option>
        </select>
        <select className="dropdown" onChange={handleChange}>
            <option value="DESC">DESC</option>
            <option value="ASC">ASC</option>
        </select>
       </legend>
       </nav>
}