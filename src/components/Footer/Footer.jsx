import './Footer.css'
import realBlack from '../../assets/lB.png'
import githubLogo from '../../assets/GithubLogoWhite.png'

export default function Footer(){
    return(
        <div id='footer' className='footer'>
            <div id='logoBar'><img src={realBlack} className='logoBlack'></img></div>
            <div id='info'>

                <div id='Copyright'>2023 Sauna Spa Real Paradise®</div>
                <div id='Developer'>Developed by:
                <a id='user' href='https://github.com/bryan201429'>brn201429 
                    <img className='githubLogo' src={githubLogo}></img>
                </a>
                </div>
                
            </div>
        </div>  
    )
}