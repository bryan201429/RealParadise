import './ServicesInfo.css'
import Pool from '../../assets/Pool.jpg'
import Footer from '../../components/Footer/Footer'
export default function ServicesInfo(){
    return(
        <div id='ServicesInfo'>

            <div className='serviceContainer'>
                <img className='serviceImg'src={Pool}></img>
                <div className='serviceInfo'> 
                    <h1>Piscina</h1>
                    <ul>
                        <li>Profundidad: 1.70m - 1.50 m</li>
                        <li>Limpieza y desinfección diaria</li>
                        <li>Autorizada por Ministerio de Salud</li>
                    </ul>
                </div>
            </div>

            <div className='serviceContainer'>
                <div className='serviceInfoD'> </div>
                <img className='serviceImgD' src={Pool}></img>
            </div>
                <div className='serviceContainer'>
                <div className='serviceInfoD'> </div>
                <img className='serviceImgD' src={Pool}></img>
            </div>
        <Footer></Footer>
        </div>
    )

}