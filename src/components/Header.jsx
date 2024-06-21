import { useContext } from 'react'
import { UserContext } from './UserContext'


export const Header = () => {
    const {username} = useContext(UserContext)
    
    return (<section className='header'>
    <button className='user-button'>User: {username}</button>
    <h1 className='logo' id="top">NC News</h1>
    </section>)
}