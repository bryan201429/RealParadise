import './Home.css'
import { useEffect } from 'react'
import Principal from '../../assets/Principal.jpg'
import Pool from '../../assets/Pool.jpg'
import Pool2 from '../../assets/Pool2.jpg'


export default function Home(){

    useEffect(() => {
        let counter = 1;
        const interval = setInterval(() => {
            document.getElementById('radio' + counter).checked = true;
            counter++;
            if (counter > 4) {
                counter = 1;
            }
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return(
        <div id='HomeContainer'>

            <div className='wrapper'>
                <div className='carousel'>
                    <img src={Principal} alt='1'/>
                    <img src={Pool2} alt='1'/>
                    <img src={Principal} alt='1'/>
                    <img src={Pool2} alt='1'/>
                </div>
            </div>
        </div>
    )
}