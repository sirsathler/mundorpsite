import css from './Footer.css'
import imageDisc from '../../images/social/discord.png'
import imageFace from '../../images/social/facebook.png'
import imageInsta from '../../images/social/insta.png'

export default function Footer(){
    return(
        <footer>
            <div className="container">
                <div className="footer-top">
                    <div className="footer-title">
                        <h2>mundo</h2>
                    </div>
                    <div className="social-media">
                        <a href=""><img src={imageDisc} alt="" /></a>
                        <a href=""><img src={imageFace} alt="" /></a>
                        <a href=""><img src={imageInsta} alt="" /></a>
                    </div>
                </div>
                <div className="footer-center">
                    <div className="links-site">
                        <h3>informações</h3>
                        <div className="footer-target">
                            <a href=""><p>meu perfil</p></a>
                            <a href=""><p>como jogar</p></a>
                            <a href=""><p>loja oficial</p></a>
                        </div>
                    </div>
                    <div className="comunication">
                        <h3>suporte</h3>
                        <div className="footer-target">
                            <a href=""><p>faq</p></a>
                            <a href=""><p>feedback</p></a>
                            <a href=""><p>fale conosco</p></a>
                        </div>
                    </div>
                    <div className="about-us">
                        <h3>A equipe</h3>
                        <div className="footer-target">
                            <a href=""><p>membros</p></a>
                            <a href=""><p>participar</p></a>
                            <a href=""><p>o projeto</p></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom"></div>
            </div>
        </footer>
    )
}