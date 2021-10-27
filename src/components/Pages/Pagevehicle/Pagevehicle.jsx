import css from './Pagevehicle.css'

import Banner from "../../Global/Banner/Banner";
import Vehicleinfo from "../../Global/Vehicleinfo";


export default function Pagevehicle(){
    return(
        <section>
            <Banner />
            <div className="vehicle-details">
                <Vehicleinfo isPageVehicle={true} />
                <Vehicleinfo isPageVehicle={true} />
                <Vehicleinfo isPageVehicle={true} />
                <Vehicleinfo isPageVehicle={true} />
            </div>
            <div className="debts">
                <div className="debts-title"><p>débitos</p></div>
                <div className="debts-overview">
                    <div className="debts-box">
                        <div className="current-debts"></div>
                        <div className="pay-debts">
                            
                        </div>
                        <div className="doubts"><p>dúvidas? Clique aqui</p></div>
                    </div>
                    <p>você nao pode usar o carro se ele estiver com debitos ativos!</p>
                </div>
            </div>
        </section>
    )
}