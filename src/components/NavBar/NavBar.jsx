import './NavBar.css'
import Logo from '../../assets/Logo.png'
import { Link, animateScroll as scroll } from "react-scroll";

export default function NavBar(){

    return(
        <div id='NavContainer'>
            <img src={Logo} id='Logo'></img>
            <div className='NavComponent'><Link to='DetailBoxContainer' className='NavComponentLink' spy={true} smooth={true} offset={-200} duration={500} onClick={console.log('clickScroll')}> Horario de atención</Link></div>
            <div className='NavComponent'><Link to='MapsContainer' className='NavComponentLink' spy={true} smooth={true} offset={-200} duration={500} onClick={console.log('clickScroll')}> Contacto</Link></div>
            <div className='NavComponent'><Link to='MapsContainer' className='NavComponentLink' spy={true} smooth={true} offset={-200} duration={500} onClick={console.log('clickScroll')}> Ubicación</Link></div>
            <div className='NavComponent'><Link  to='footer' className='NavComponentLink' spy={true} smooth={true} offset={-200} duration={500} onClick={console.log('clickScroll')}> Servicios</Link></div>

        </div>
    )
}