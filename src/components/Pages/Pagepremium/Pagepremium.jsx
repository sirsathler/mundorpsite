import css from './Pagepremium.css'
import Card from '../Pageshop/Shopcards/Card'

import imageBanner from '../../../images/logo-minimalist.png'
import image from '../../../images/premiumshop.png'


const premium = [
    {
        "id": 1,
        "description": "1 mês de assinatura premium",
        "image": "https://imgur.com/yOgB7ZF.png",
        "mp": 100,
        "rp": 150
    },
    {
        "id": 2,
        "description": "3 mês de assinatura premium",
        "image": "https://imgur.com/Ev7XYYj.png",
        "mp": 100,
        "rp": 150
    },
    {
        "id": 3,
        "description": "6 mês de assinatura premium",
        "image": "https://imgur.com/SEXXmQi.png",
        "mp": 100,
        "rp": 150
    },
]


export default function Pagepremium(){
    return(
        <div className= "page-premium">
            <section className='premium-banner'>
                <div className="container">
                    <div className='image-wrapper'>
                        <img className='premium-image' src={imageBanner}/>
                    </div>
                </div>
                <img src="" alt="" />
            </section>
            <section className= 'rewards-container'>
                <div className= 'text-wrapper'>
                    <p className= 'rewards-title'>BRINDES GRATUITOS</p>
                    <p className= 'rewards-subtitle'>
                        COM A ASSINATURA PREMIUM VOCÊ RECEBE BÔNUS DE
                        MP E DIVERSOS OUTROS BRINDES TODA SEMANA!
                    </p>
                </div>
                <div className= 'rewards-img-wrapper'>
                    <img src={image}/>
                </div>  
            </section>
            <section className='benefits'>
                <div className= 'text'>
                    <p className= 'title'>ACESSO AO SERVIDOR PREMIUM</p>
                    <p className= 'subtitle'>VOCÊ POSSUIRÁ ACESSO EXCLUSIVO AO NOSSO SERVIDOR PREMIUM, 
                    COM XP DOBRADO!</p>
                </div>
                <div className='text'>
                    <p className='title'>MAIS VAGAS NA GARAGEM! </p>
                    <p className='subtitle'>VOCÊ PODERÁ GUARDAR MAIS CARROS EM SUA GARAGEM PESSOAL!</p>
                </div>
                <div className='text'>
                    <p className='title'>E MUITAS OUTRAS VANTAGENS!</p>
                    <p className='subtitle'>ASSINE JÁ O MUNDO PREMIUIM PARA TER ACESSO A ESSAS E DIVERSAS OUTRAS VANTAGENS EM NOSSOS SERVIDORES!</p>
                </div>
            </section>
            <section className='cards-premium'>
                <div className='cards-premium-title'>
                    <h2>assine o premium!</h2>
                </div>
                <div className='cards-premium-container'>
                    {
                        premium.map((card)=>(
                            <Card image={card.image} name={card.description} price={card.mp}/>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}