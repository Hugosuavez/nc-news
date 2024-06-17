import { useContext } from 'react'
import { UserContext } from './user-context'


export const Header = () => {
    const {username} = useContext(UserContext)
    
    return (<>
    <h1>NC News</h1>
    <button>+</button>
    <button>User: {username}</button>
    </>)
}