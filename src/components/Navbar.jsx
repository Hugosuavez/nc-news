import { useNavigate } from "react-router-dom"
import { TopicButtons } from "./TopicButtons"

export const Navbar = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }
    return (<nav className="navbar">
    <button 
   className="nav-button" onClick={handleClick}>Home</button>
    <br />
    <TopicButtons />
    <button className="nav-button">Topics</button>
    </nav>)
}