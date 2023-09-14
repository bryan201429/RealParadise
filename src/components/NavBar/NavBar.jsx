import './NavBar.css'
import Logo from '../../assets/Logo.png'
import { Link, animateScroll as scroll } from "react-scroll";
import { useNavigate, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function NavBar() {
    const navigate = useNavigate();
        
    const [dynamicClass, setDynamicClass] = useState('NavComponent');
    // const [spyv, setSpyv] = useState(true);

    const scrollToDetailBox = (itemToScroll) => {
        sessionStorage.setItem('itemToScroll', itemToScroll);
        sessionStorage.setItem('route','/');
        navigate('/');
    };
    
    useEffect(() => {
        if (location.pathname=='/Services') {
            console.log(location.pathname);
            setDynamicClass('NavComponentoff');
            // setSpyv(false);

        }
        else{
            console.log(location.pathname);
            setDynamicClass('NavComponent');
            // setSpyv(true);
        }

       
    }, [location.pathname]);

    return (
        <div id='NavContainer'>
            <img src={Logo} id='Logo' alt="Logo"></img>
            <div className={dynamicClass}>
                <Link to='DetailBoxContainer'
                    className='NavComponentLink' spy={true} smooth={true} offset={-150} duration={500}
                    onClick={() => scrollToDetailBox('DetailBoxContainer')} > Horario de atención
                </Link>
            </div>
            <div className={dynamicClass}>
                <Link to='MapsContainer'
                    className='NavComponentLink' spy={true} smooth={true} offset={-130} duration={500}
                    onClick={() => scrollToDetailBox('MapsContainer')}> Contacto
                </Link>
            </div>
            <div className={dynamicClass}>
                <Link to='MapsContainer'
                    className='NavComponentLink' spy={true} smooth={true} offset={-130} duration={500}
                    onClick={() => scrollToDetailBox('MapsContainer')}> Ubicación
                </Link>
            </div>
            <div className={dynamicClass}>
                <NavLink to='/Services' className='NavComponentLink' 
                    > Servicios
                </NavLink>
            </div>
        </div>
    )
}
