import css from './Pagevehicle.css'

import Banner from "../../Global/Banner/Banner";
import Vehicleinfo from "../../Global/Vehicleinfo";
import Purchase from "../../Global/Buttons/Purchase"
import Debtdata from './Debtdata';

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
                        <div className="current-debts">
                            <Debtdata />
                            <Debtdata />
                            <Debtdata />
                            <Debtdata />
                            <Debtdata />
                            <div className="total-debts">
                                <div className="debt-name"><p>Total a pagar</p></div>
                                <div className="debt-valor"><p>-200RP</p></div>
                            </div>
                        </div>
                        <div className="pay-debts">
                            <Purchase isHundred={true}/>
                        </div>
                        <div className="doubts"><p>dúvidas? Clique aqui</p></div>
                    </div>
                </div>
                <div className="debts-info">
                    <p>você nao pode usar o carro se ele estiver com debitos ativos!</p>
                </div>
            </div>
        </section>
    )
}