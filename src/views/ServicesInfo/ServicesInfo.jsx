import './ServicesInfo.css'
import Pool from '../../assets/Pool.jpg'
import Footer from '../../components/Footer/Footer'
import { useEffect } from 'react'
// import { useLocation } from 'react-router-dom'
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
                    
                        <h2>Profundidad: 1.70m - 1.50 m</h2>
                        <h2>Limpieza y desinfección diaria</h2>
                        <h2>Autorizada por Ministerio de Salud</h2>
                        <h2>Autorizada por Ministerio de Salud</h2>
                    
                </div>
            </div>

            <div className='serviceContainer'>
                <div className='serviceInfoD'> 
                    <h1>Jacuzzi</h1>
                    
                        <h2>Hidromasajes</h2>
                        <h2>Limpieza y desinfección diaria</h2>
                        <h2>Autorizada por Ministerio de Salud</h2>
                    
                </div>
                <img className='serviceImgD' src={Pool}></img>
            </div>

            <div className='serviceContainer'>
                <img className='serviceImg'src={Pool}></img>
                <div className='serviceInfo'> 
                    <h1>Piscina de Niños</h1>
                    
                        <h2>Profundidad: 0.8    m</h2>
                        <h2>Limpieza y desinfección diaria</h2>
                        <h2>Autorizada por Ministerio de Salud</h2>
                        <h2>Autorizada por Ministerio de Salud</h2>
                    
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
                    
                        <h2>Jugos</h2>
                        <h2>Sandwiches</h2>
                        <h2>Salchipapas y más</h2>
                    
                </div>
                <img className='serviceImgD' src={snack}></img>
            </div>


        <Footer></Footer>
        </div>
    )

}