import './NavBar.css'
import Logo from '../../assets/Logo.png'
import { Link, animateScroll as scroll } from "react-scroll";

export default function NavBar(){

    return(
        <div id='NavContainer'>
            <img src={Logo} id='Logo'></img>
            <a >Contacto</a>
            <Link className='NavComponent' to='test' spy={true} smooth={true} offset={50} duration={500} onClick={console.log('clickScroll')}> Test</Link>

            <div >Ubicación</div>
            <div >Servicios</div>

        </div>
    )
}