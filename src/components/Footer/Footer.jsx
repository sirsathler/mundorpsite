import css from './Footer.css'
import image from '../../images/sections/discord.png'

function Footer(){
    return(
        <footer>
            <a className="animated banner-discord" href="#">
                <img src={image} alt=""/>
            </a>
        </footer>
    )
}
export default Footer