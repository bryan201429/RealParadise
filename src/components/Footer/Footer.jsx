import './Footer.css'
import logoBlack from '../../assets/logoBlack.png'
import githubLogo from '../../assets/GithubLogoWhite.png'

export default function Footer(){
    return(
        <div id='Container'>
            <div id='logoBar'><img src={logoBlack} className='logoBlack'></img></div>
            <div id='info'>

                <div id='Copyright'>2023 Sauna Spa Real Paradise</div>
                <div id='Developer'>Develoved by:
                <a id='user' href='https://github.com/bryan201429'>brn201429 
                    <img className='githubLogo' src={githubLogo}></img>
                </a>
                </div>
                
            </div>
        </div>  
    )
}