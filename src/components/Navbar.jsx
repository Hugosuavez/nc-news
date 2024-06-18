import { useNavigate } from "react-router-dom"

export const Navbar = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }
    return (<nav className="navbar">
    <button onClick={handleClick}>Home</button>
    <br />
    <button>Topics</button>
    </nav>)
}