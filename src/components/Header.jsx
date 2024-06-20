import { useContext } from 'react'
import { UserContext } from './UserContext'


export const Header = () => {
    const {username} = useContext(UserContext)
    
    return (<section className='header'>
    <h1>NC News</h1>
    <button>+</button>
    <button>User: {username}</button>
    </section>)
}