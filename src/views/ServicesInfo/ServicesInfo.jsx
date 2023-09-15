import './ServicesInfo.css'
import Pool from '../../assets/Pool.jpg'

export default function ServicesInfo(){
    return(
        <div id='ServicesInfo'>

            <div className='serviceContainer'>
                <img className='serviceImg'src={Pool}></img>
                <div className='serviceInfo'> </div>
            </div>

            <div className='serviceContainer'>
                <div className='serviceInfoD'> </div>
                <img className='serviceImgD' src={Pool}></img>
            </div>

        </div>
    )

}