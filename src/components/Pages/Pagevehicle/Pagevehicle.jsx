import css from './Pagevehicle.css'

import Banner from "../../Global/Banner/Banner";
import Vehicleinfo from "../../Global/Vehicleinfo";
import Purchase from "../../Global/Buttons/Purchase"
import Debtdata from './Debtdata';

import image from '../../../images/shop/cars/Python.png'

const itemVehicle = [
    {
        "id": 1, 
        "iconImage": "https://imgur.com/sXjGF0v.png",
        "infoVehicle": "666666"
    },
    {
        "id": 2, 
        "iconImage": "https://imgur.com/FU3wfzU.png",
        "infoVehicle": "10/100"
    },
    {
        "id": 3, 
        "iconImage": "https://imgur.com/KY9Lc5g.png",
        "infoVehicle": "100/100"
    },
    {
        "id": 4, 
        "iconImage": "https://imgur.com/oOw88aM.png",
        "infoVehicle": "Sirgay"
    }
]

export default function Pagevehicle(){
    return(
        <div>
            <Banner image={image}/>
            <div className="vehicle-details">
                {
                    itemVehicle.map((item)=>(
                        <Vehicleinfo isPageVehicle={true} key={item.id} image={item.iconImage} info={item.infoVehicle} />
                    ))
                }
            </div>
            <section className="debts">
                <div className="debts-title"><p>débitos</p></div>
                <div className="debts-overview">
                    <div className="debts-box">
                        <div className="current-debts">
                            <Debtdata />
                            <Debtdata />
                            <Debtdata />
                            <Debtdata />
                            <Debtdata />
                            <div className="total-debts">
                                <div className="debt-name"><p>Total a pagar:</p></div>
                                <div className="debt-valor"><p>-200RP</p></div>
                            </div>
                        </div>
                        <div className="pay-debts">
                            <Purchase text="Pagar agora!"/>
                        </div>
                        <div className="doubts"><p>dúvidas? Clique aqui</p></div>
                    </div>
                </div>
                <div className="debts-info">
                    <p>você nao pode usar o carro se ele estiver com debitos ativos!</p>
                </div>
            </section>
        </div>
    )
}