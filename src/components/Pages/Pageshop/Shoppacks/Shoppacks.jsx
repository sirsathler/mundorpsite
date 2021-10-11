import css from './Shoppacks.css';
import Card from '../Shopcards/Card';
import styled from 'styled-components';
import iconMp from '../../../../images/shop/icons/mp.png'

const Section = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 600px;
    background-color: ${props => props.defaultCard === false && '#1a1a1a;' || '#e6e6e6;'};

    @media screen and (max-width: 720px){height: auto;}   

    .pack-title{

        h2{
            font-family: 'Urban';
            font-size: 3.5rem;
            font-weight: 300;
            color: ${props => props.defaultCard === false && 'white'};

            @media screen and (max-width: 720px){font-size: 2.5rem;}
            @media screen and (max-width: 390px){font-size: 2rem;} 

        }
    }

    .pack-cards a{
        margin: 0 20px;
        @media screen and (max-width: 720px){margin: 10px 20px;}   

        .card{
            margin: 0;
            background-color: ${props => props.defaultCard !== false && '#ffffff'};
            box-shadow: ${props => props.defaultCard === false && '0 0 1px 1px #efefef' || '0 0 1px 1px #d5d5d5'};

            .card-image{

                img{max-width: ${props => props.defaultCard !== false && '140px'};}
            }

            .card-infos{
                width: ${props => props.defaultCard === false && '100%'};
                background-color: ${props => props.defaultCard === false && '#ffffff'};
                border-top: none;
            }
        }
    }
`

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

const mp = [
    {
        "id": 1,
        "description": "mês de assinatura premium",
        "image": "https://imgur.com/iufpDXv.png",
        "mp": 100,
        "rp": "R$5,00"
    },
    {
        "id": 2,
        "description": "mês de assinatura premium",
        "image": "https://imgur.com/iufpDXv.png",
        "mp": 300,
        "rp": "R$5,00"
    },
    {
        "id": 3,
        "description": "mês de assinatura premium",
        "image": "https://imgur.com/iufpDXv.png",
        "mp": 500,
        "rp": "R$5,00"
    }
]

export default function Shoppacks(props){
    if(props.sectionSelect == 'premium'){
        return(
            <Section defaultCard={false}>
                <div className="container">
                    <div className="pack-title"><h2>{props.title}</h2></div>
                    <div className="pack-cards">
                        {
                            premium.map((card)=>(
                                <Card image={card.image} name={card.description} price={card.mp}/>
                            ))
                        }
                    </div>
                </div> 
            </Section>
        )
    }return(
        <Section>
            <div className="container">
                <div className="pack-title"><h2>{props.title}</h2></div>
                <div className="pack-cards">
                    {
                        mp.map((card)=>(
                            <Card image={card.image} name={card.mp} price={card.rp}/>
                        ))
                    }
                </div>
            </div> 
        </Section>
    )
}