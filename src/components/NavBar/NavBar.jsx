import './NavBar.css'
import Logo from '../../assets/Logo.png'
import { Link, animateScroll as scroll} from "react-scroll";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


export default function NavBar(){
    const navigate = useNavigate();
    const scrollToDetailBox = (itemToScroll) => {
        // Realiza la navegación programática a la ruta '/'
        localStorage.setItem('itemToScroll',itemToScroll)
        
        navigate('/');

        // // Luego, puedes realizar el scroll hacia 'DetailBoxContainer'
        // const element = document.getElementById('DetailBoxContainer');
        // if (element) {
        //     window.scrollTo({
        //         top: element.offsetTop,
        //         behavior: 'smooth',
        //     });
        // }
    };

    return(
        <div id='NavContainer'>
            <img src={Logo} id='Logo'></img>
            <div className='NavComponent'><Link to='DetailBoxContainer' className='NavComponentLink' spy={true} smooth={true} offset={-250} duration={500} onClick={()=>scrollToDetailBox('DetailBoxContainer')} > Horario de atención</Link></div>
            <div className='NavComponent'><Link to='MapsContainer' className='NavComponentLink' spy={true} smooth={true} offset={-200} duration={500} > Contacto</Link></div>
            <div className='NavComponent'><Link to='MapsContainer' className='NavComponentLink' spy={true} smooth={true} offset={-200} duration={500} > Ubicación</Link></div>
            <div className='NavComponent'><NavLink  to='/Services' className='NavComponentLink'> Servicios</NavLink></div>

        </div>
    )
}