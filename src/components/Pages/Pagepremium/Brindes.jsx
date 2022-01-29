import css from './Brindes.css'
import image from '../../../images/premiumshop.png'

export default function Brindes(){
    return(
       <section className= 'rewards-container'>
            <div className= 'text-wrapper'>
                    <p className= 'title'>BRINDES GRATUITOS</p>
                    <p className= 'subtitle'>COM A ASSINATURA PREMIUM VOCÊ RECEBE BÔNUS DE
                    MP E DIVERSOS OUTROS BRINDES TODA SEMANA!</p>
            </div>
            <div className= 'img-wrapper'>
                <img src={image}/>
            </div>              
       </section>
)   
}