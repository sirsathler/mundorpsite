import css from './Pagevehicle.css'

import Banner from "../../Global/Banner/Banner";
import Vehicleinfo from "../../Global/Vehicleinfo";


export default function Pagevehicle(){
    return(
        <section>
            <Banner />
            <div className="vehicle-details">
                <Vehicleinfo />
                <Vehicleinfo />
                <Vehicleinfo />
                <Vehicleinfo />
            </div>
            <div className="debts">
                <div className="debts-title"><p>debitos</p></div>
                <div className="debts-overview">
                    <div className="debts-box">

                    </div>
                </div>
            </div>
        </section>
    )
}