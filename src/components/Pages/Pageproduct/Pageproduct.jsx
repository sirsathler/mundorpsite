import css from './Pageproduct.css'
import Carousel from 'react-elastic-carousel'
import Card from '../Pageshop/Shopcards/Card.jsx'
import Productcolor from './Productcolor.jsx'
import Purchase from '../../Global/Buttons/Purchase'

import image from '../../../images/shop/cars/DTS.png'
import mp from '../../../images/shop/icons/mp.png'


export default function Pageproduct(){
    return(
        <section className="page-product">
            <div className="product-banner">
                <div className="container">
                    <div className="product-name"><p>dts</p></div>
                    <div className="product-image">
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
            <div className="product-infos">

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
                </div>
            </div>
            <div className="products">
                <div className="container">
                    <Carousel itemsToShow={3} pagination={false}>
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