import css from './Footer.css'
import imageDisc from '../../images/social/discord.png'

export default function Footer(){
    return(
        <a href="">
            <footer>
                <img src={imageDisc} alt="" />
                <p>acesse nosso discord!</p>
            </footer>
        </a>
    )
}