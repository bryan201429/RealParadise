import './ServicesInfo.css'
import Pool from '../../assets/Pool.jpg'
import Footer from '../../components/Footer/Footer'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import garage from '../../assets/Garagee.jpg'
import snack from '../../assets/Salchipapa.jpg'
import masage from '../../assets/Masage.jpg'

export default function ServicesInfo(){
    // const location = useLocation();
    useEffect(()=>{
        const elementToScroll = document.getElementById('serviceContainer');
        // console.log('Este es el elementToScroll:',elementToScroll)
        if(elementToScroll){
            // console.log('Este es el elementToScroll:',elementToScroll)
            // reloadSlider();
            elementToScroll.scrollIntoView({
                behavior: 'instant', // Agrega desplazamiento suave
                block: 'center',     // Desplaza el elemento al principio de la ventana
              });
            //   sessionStorage.setItem('itemToScroll','');
        }

    },[])
    return(
        
        <div id='ServicesInfo'>

            <div className='serviceContainer'id ='serviceContainer'>
                <img className='serviceImg'src={Pool}></img>
                <div className='serviceInfo'> 
                    <h1>Piscina</h1>
                    <ul>
                        <li>Profundidad: 1.70m - 1.50 m</li>
                        <li>Limpieza y desinfección diaria</li>
                        <li>Autorizada por Ministerio de Salud</li>
                        <li>Autorizada por Ministerio de Salud</li>
                    </ul>
                </div>
            </div>

            <div className='serviceContainer'>
                <div className='serviceInfoD'> 
                    <h1>Jacuzzi</h1>
                    <ul>
                        <li>Hidromasajes</li>
                        <li>Limpieza y desinfección diaria</li>
                        <li>Autorizada por Ministerio de Salud</li>
                    </ul>
                </div>
                <img className='serviceImgD' src={Pool}></img>
            </div>

            <div className='serviceContainer'>
                <img className='serviceImg'src={Pool}></img>
                <div className='serviceInfo'> 
                    <h1>Piscina de Niños</h1>
                    <ul>
                        <li>Profundidad: 0.8    m</li>
                        <li>Limpieza y desinfección diaria</li>
                        <li>Autorizada por Ministerio de Salud</li>
                        <li>Autorizada por Ministerio de Salud</li>
                    </ul>
                </div>
            </div>

            <div className='serviceContainer'>
                <div className='serviceInfoD'> 
                    <h1>Masajes</h1>
                </div>
                <img className='serviceImgD' src={masage}></img>
            </div>


            <div className='serviceContainer'>
                <img className='serviceImg'src={garage}></img>
                <div className='serviceInfo'> 
                    <h1>Estacionamiento</h1>
                </div>
            </div>

            <div className='serviceContainer'>
                <div className='serviceInfoD'> 
                    <h1>Snack</h1>
                    <ul>
                        <li>Jugos</li>
                        <li>Sandwiches</li>
                        <li>Salchipapas y más</li>
                    </ul>
                </div>
                <img className='serviceImgD' src={snack}></img>
            </div>


        <Footer></Footer>
        </div>
    )

}