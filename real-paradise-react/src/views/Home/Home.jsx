import './Home.css'
import { useEffect,useState } from 'react'
import Principal from '../../assets/Principal.jpg'
import Pool from '../../assets/Pool.jpg'
import Pool2 from '../../assets/Pool2.jpg'


export default function Home(){


    useEffect(()=>{

        let slider = document.querySelector('.slider .list');
        let items = document.querySelectorAll('.slider .list .item');
        let next = document.getElementById('next');
        let prev = document.getElementById('prev');
        let dots = document.querySelectorAll('.slider .dots li');
        
        let lengthItems = items.length - 1;
        let active = 0;
        let refreshInterval=setInterval(()=> {next.click()}, 5000);
        reloadSlider()

        function reloadSlider(){
            
            slider.style.left = -items[active].offsetLeft + 'px';

            let last_active_dot = document.querySelector('.slider .dots li.active');
            last_active_dot.classList.remove('active');
            dots[active].classList.add('active');
            clearInterval(refreshInterval);
            refreshInterval = setInterval(()=> {next.click()}, 5000);            
        }

        next.addEventListener('click',()=>{
            active = active + 1 <= lengthItems ? active + 1 : 0;
            reloadSlider();
        })
       
        prev.addEventListener('click',()=>{
            active = active + 1 <= lengthItems ? active + 1 : 0;
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
    },[])

    return(
        <div id='HomeContainer'>
           <div className="slider">
        <div className="list">
            <div className="item">
                <img src={Principal} alt=""/>
            </div>
            <div className="item">
                <img src={Pool} alt=""/>
            </div>
            <div className="item">
                <img src={Pool2} alt=""/>
            </div>
            <div className="item">
                <img src={Principal} alt=""/>
            </div>
            <div className="item">
                <img src={Pool} alt=""/>
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
        </ul>
    </div>
        </div>
    )
}