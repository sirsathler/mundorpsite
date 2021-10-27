import css from './Banner.css'

import Returnpage from '../Buttons/Returnpage'
import Options from '../Buttons/Options'
import Searchbar from '../Buttons/Searchbar'
import Vehicleinfo from '../Vehicleinfo'

import img from '../../../images/shop/cars/Python.png'

export default function Banner(){
    return(
        <section className='banner'>
            <div className="container">
                <div className="banner-top">
                    <div className="content-button">
                        <Returnpage />
                    </div>
                    <div className="search-bar-wrapper">
                        <Searchbar />
                    </div>
                    <div className="content-button">
                        <Options />
                    </div>
                </div>
                <div className="banner-center">
                    <div className="vehicle-name"><p>rtx</p></div>
                    <div className="vehicle-img">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="banner-bottom">
                    <Vehicleinfo isPageVehicle={false}/>
                </div>
            </div>
        </section>
    )
}