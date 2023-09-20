import './Home.css'
import { useEffect} from 'react'
import Pool1 from '../../assets/Pool1.jpeg'
import Snack from '../../assets/Snack.webp'
import Garage from '../../assets/Garagee.jpg'
import Masajes from '../../assets/Masajes.webp'
import Camara from '../../assets/CamaraSeca.jpeg'
import Jacuzzi1 from '../../assets/Jacuzzi4.jpeg'
import Poolk from '../../assets/PoolK.jpg'
import DetailBox from '../../components/detailBox/DetailBox'
import MapsInfo from '../../components/mapsInfo/MapsInfo'
import Footer from '../../components/Footer/Footer'
import {scroll} from 'react-scroll'
import { useLocation } from 'react-router-dom'



export default function Home(){
    const location = useLocation();
    useEffect(()=>{
        
        const itemToScroll=sessionStorage.getItem('itemToScroll')
        const elementToScroll = document.getElementById(itemToScroll);

        let slider = document.querySelector('.slider .list');
        let items = document.querySelectorAll('.slider .list .item');
        let next = document.getElementById('next');
        let prev = document.getElementById('prev');
        let dots = document.querySelectorAll('.slider .dots li');
        
        let lengthItems = items.length - 1;
        let active = 0;
        let refreshInterval=setInterval(()=> {next.click()}, 3500);
        reloadSlider();
    
        function reloadSlider(){
            
            slider.style.left = -items[active].offsetLeft + 'px';

            let last_active_dot = document.querySelector('.slider .dots li.active');
            last_active_dot.classList.remove('active');
            dots[active].classList.add('active');
            clearInterval(refreshInterval);
            refreshInterval = setInterval(()=> {next.click()}, 3500 );            
        }
        if(itemToScroll){
            reloadSlider();
            elementToScroll.scrollIntoView({
                behavior: 'smooth', // Agrega desplazamiento suave
                block: 'center',     // Desplaza el elemento al principio de la ventana
              });
              sessionStorage.setItem('itemToScroll','');
        }
        
        next.addEventListener('click',()=>{
            active = active + 1 <= lengthItems ? active + 1 : 0;
            reloadSlider();
        })
       
        prev.addEventListener('click',()=>{
            active = active - 1 <= lengthItems ? active - 1 : 0;
            reloadSlider();
        })
        dots.forEach((li, key) => {
            li.addEventListener('click', ()=>{
                 active = key;
                 reloadSlider();
            })
        })
        window.onresize = function() {
                reloadSlider();
            };
    return()=>{
        clearInterval(refreshInterval);
    }

    },[location.pathname])

    return(
        <div id='HomeContainer'>
           <div className="slider">
                <div className="list">
                    <div className="item">
                        <div className='slideInfo'>PISCINA TEMPERADA</div>
                        <img src={Pool1} alt=""/>
                    </div>
                    <div className="item">
                        <div className='slideInfo'>JACUZZI</div>
                        <img src={Jacuzzi1} alt=""/>
                    </div>
                    <div className="item">
                        <div className='slideInfo'>PISCINA PARA NIÑOS</div>
                        <img src={Poolk} alt=""/>
                    </div>
                    <div className="item">
                        <div className='slideInfo'>CAMARAS DE VAPOR/SECO</div>
                        <img src={Camara} alt=""/>
                    </div>
                    <div className="item">
                        <div className='slideInfo'>ESTACIONAMIENTO</div>
                        <img src={Garage} alt=""/>
                    </div>
                    <div className="item">
                        <div className='slideInfo'>SNACK</div>
                        <img src={Snack} alt=""/>
                    </div>
                    <div className="item">
                        <div className='slideInfo'>MASAJES</div>
                        <img src={Masajes} alt=""/>
                    </div>
                </div>
                <div className="buttons">
                    <button id="prev">{'<'}</button>
                    <button id="next">{'>'}</button>
                </div>
                <ul className="dots">
                    <li className="active"></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <DetailBox></DetailBox>
            <MapsInfo></MapsInfo>
            <Footer></Footer>
        </div>
    )
}