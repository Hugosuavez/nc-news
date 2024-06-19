import { useNavigate } from "react-router-dom"
import { TopicButtons } from "./TopicButtons"

export const Navbar = ({setArticles}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }
    return (<nav className="navbar">
    <button 
   className="home-button" onClick={handleClick}>Home</button>
    <br />
    
    <TopicButtons setArticles={setArticles}/>
    </nav>)
}