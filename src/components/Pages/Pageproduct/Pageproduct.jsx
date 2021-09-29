import css from './Pageproduct.css'
import Carousel from 'react-elastic-carousel'
import Card from '../Pageshop/Shopcards/Card.jsx'

import image from '../../../images/shop/cars/DTS.png'

function Pageproduct(){
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
export default Pageproduct