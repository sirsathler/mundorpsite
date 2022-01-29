import css from './Pagepremium.css'
import Card from '../Pageshop/Shopcards/Card'

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
/*NAO SEI SE CONSIGO REPLICAR COM UMA JÁ EXISTENTE, VOU OLHAR HOJE DE MANHA 
29/01*/ 

export default function Pagepremium(){
    return(
        <div className= "page-premium">
            {/*GABY FAZ O SEU AQUI EM CIMA*/}
            <section className= 'rewards-container'>
                <div className= 'text-wrapper'>
                    <p className= 'title'>BRINDES GRATUITOS</p>
                    <p className= 'subtitle'>
                        COM A ASSINATURA PREMIUM VOCÊ RECEBE BÔNUS DE
                        MP E DIVERSOS OUTROS BRINDES TODA SEMANA!
                    </p>
                </div>
                <div className= 'img-wrapper'>
                    <img src={image}/>
                </div>  
            </section>

            <section className= 'premium-server-container'>
                <div className= 'text-wrapper'>
                    <p className= 'title'>ACESSO AO SERVIDOR PREMIUM</p>
                    <p className= 'subtitle'>VOCÊ POSSUIRÁ ACESSO EXCLUSIVO AO NOSSO SERVIDOR PREMIUM, 
                    COM XP DOBRADO!</p>
                </div>
            </section> 
                      
            <div>
                <section className='text'>
                    <p className='title'>MAIS VAGAS NA GARAGEM! </p>
                    <p className='subtitle'>VOCÊ PODERÁ GUARDAR MAIS CARROS EM SUA GARAGEM PESSOAL!</p>
                </section>

                <section className='background'>
                    <p className='orange-text title'>E MUITAS OUTRAS VANTAGENS!</p>
                    <p className='subtitle'>ASSINE JÁ O MUNDO PREMIUIM PARA TER ACESSO A ESSAS E DIVERSAS OUTRAS VANTAGENS EM NOSSOS SERVIDORES!</p>
                </section>
            </div>
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