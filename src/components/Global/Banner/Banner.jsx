import css from './Banner.css'

import Returnpage from '../Buttons/Returnpage'
import Options from '../Buttons/Options'
import Searchbar from '../Buttons/Searchbar'
import Vehicleinfo from '../Vehicleinfo'

export default function Banner(props){
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
                        <img src={props.image} alt="" />
                    </div>
                </div>
                <div className="banner-bottom">
                    <Vehicleinfo isPageVehicle={false}/>
                </div>
            </div>
        </section>
    )
}