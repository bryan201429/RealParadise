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
                    <h1>Piscina temperada</h1>

                </div>
            </div>

            <div className='serviceContainer serviceContainerD'>
                <div className='serviceInfoD'> 
                    <h1>Jacuzzi</h1>
                </div>
                <img className='serviceImgD' src={Pool}></img>
            </div>

            <div className='serviceContainer'>
                <img className='serviceImg'src={Pool}></img>
                <div className='serviceInfo'> 
                    <h1>Piscina de niños</h1>
                    
                        <h2>Temperada</h2>

                    
                </div>
            </div>

            <div className='serviceContainer serviceContainerD'>
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

            <div className='serviceContainer serviceContainerD'>
                <div className='serviceInfoD'> 
                    <h1>Snack</h1>
                </div>
                <img className='serviceImgD' src={snack}></img>
            </div>


        <Footer></Footer>
        </div>
    )

}