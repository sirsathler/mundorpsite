import css from './Pageproduct.css'
import Carousel from 'react-elastic-carousel'
import Card from '../Pageshop/Shopcards/Card.jsx'
import Productcolor from './Productcolor.jsx'
import Purchase from '../../Global/Buttons/Purchase'
import Banner from '../../Global/Banner/Banner'

import image from '../../../images/shop/cars/DTS.png'
import mp from '../../../images/shop/icons/mp.png'
import Vehicleinfo from '../../Global/Vehicleinfo'


export default function Pageproduct(){
    return(
        <section className="page-product">
            <Banner />
            <div className="product-infos">
                <Vehicleinfo isPageVehicle={true}/>
                <Vehicleinfo isPageVehicle={true}/>
                <Vehicleinfo isPageVehicle={true}/>
            </div>
            <div className="product-sets">
                <div className="container">
                    <div className="product-color">
                        <h2>Escolha uma cor!</h2>
                        <div className="content-colors">
                            <Productcolor/>
                            <Productcolor/>
                            <Productcolor/>
                            <Productcolor/>
                            <Productcolor/>
                        </div>
                    </div>
                    <div className="product-price">
                        <img src={mp} alt="" />
                        <p>550</p>
                    </div>
                    <div className="content-button">
                        <Purchase />
                    </div>
                    <div className="cashback"><p>você poderá pedir reembolso em ate x horas spós a confirmação do pagamento</p></div>
                </div>
            </div>
            <div className="products">
                <p>confira também!</p>
                <div className="container">
                    <Carousel itemsToShow={3} pagination={false} >
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </Carousel>
                </div>
            </div>
        </section>
    )
}