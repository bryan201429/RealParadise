import './NavBar.css'
import Logo from '../../assets/Logo.png'
import { NavLink } from 'react-router-dom'

export default function NavBar(){
    return(
        <div id='NavContainer'>
            <img src={Logo} id='Logo'></img>
            
        </div>
    )
}