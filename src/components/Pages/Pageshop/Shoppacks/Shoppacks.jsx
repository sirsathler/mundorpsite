import css from './Shoppacks.css';
import Card from '../Shopcards/Card';
import styled from 'styled-components';

const Section = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 600px;
    background-color: ${props => props.defaultCard === false && '#1a1a1a;' || '#e6e6e6;'};

    .pack-title{

        h2{
            font-family: 'Urban';
            font-size: 3.5rem;
            font-weight: 300;
            color: ${props => props.defaultCard === false && 'white'};
        }
    }

    .pack-cards a{
        margin: 0 20px;

        .card{
            background-color: ${props => props.defaultCard !== false && '#ffffff'};
            box-shadow: ${props => props.defaultCard === false && '0 0 1px 1px #efefef' || '0 0 1px 1px #d5d5d5'};

            .card-infos{
                width: ${props => props.defaultCard === false && '100%'};
                background-color: ${props => props.defaultCard === false && '#ffffff'};
                border-top: none;

            }
        }
    }
`

export default function Shoppacks(props){
    if(props.background !== 'white'){
        return(
            <Section defaultCard={false}>
                <div className="container">
                    <div className="pack-title"><h2>assine o premium!</h2></div>
                    <div className="pack-cards">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div> 
            </Section>
        )
    }return(
        <Section >
            <div className="container">
                <div className="pack-title"><h2>mundopoints</h2></div>
                <div className="pack-cards">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </Section>
    )
}