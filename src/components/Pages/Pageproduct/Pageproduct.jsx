import React from 'react';
import ReactDOM from 'react-dom';

import css from './Pageproduct.css'
import Carousel from 'react-elastic-carousel'
import Card from '../Pageshop/Shopcards/Card.jsx'
import Productcolor from './Productcolor.jsx'
import Purchase from '../../Global/Buttons/Purchase'
import Banner from '../../Global/Banner/Banner'
import Vehicleinfo from '../../Global/Vehicleinfo'

import image from '../../../images/shop/cars/DTS.png'
import mp from '../../../images/shop/icons/mp.png'
import imageSpeed from '../../../images/product/speed.png'
import imageGas from '../../../images/product/gas.png'

//Custom styles for carousel//
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 }

    /*SÓ FUNCIONA ASSIM E EU NAO FAÇO IDEIA DO PQ, ESSES OBJETO AINDA TA TUDO ERRADO, MAS FUNCIONA*/
];

class Pageproduct extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            colorSelected: 0,
        }
    }

    handleClick(id) {
        this.setState({ colorSelected: id })
        console.log(this.state.selected)
    }

    render() {
        return (
            <section className="page-product">
                <Banner image={image} />
                <div className="product-infos">
                    <Vehicleinfo isPageVehicle={true} image={imageSpeed} info={'120km/h'} />
                    <Vehicleinfo isPageVehicle={true} image={imageGas} info={'20/110'} />
                </div>
                <div className="product-sets">
                    <div className="container">
                        <div className="product-color">
                            <h2>Escolha uma cor!</h2>
                            <div className="content-colors">
                                <Productcolor id={0} color={'#ffcc00'} selected={this.state.colorSelected == 0 ? true : false} onClick={() => this.handleClick(0)} />
                                <Productcolor id={1} color={'#ffffff'} selected={this.state.colorSelected == 1 ? true : false} onClick={() => this.handleClick(1)} />
                                <Productcolor id={2} color={'#fe0000'} selected={this.state.colorSelected == 2 ? true : false} onClick={() => this.handleClick(2)} />
                                <Productcolor id={3} color={'#6600cd'} selected={this.state.colorSelected == 3 ? true : false} onClick={() => this.handleClick(3)} />
                                <Productcolor id={4} color={'#ff7b00'} selected={this.state.colorSelected == 4 ? true : false} onClick={() => this.handleClick(4)} />
                                <Productcolor id={5} color={'#006634'} selected={this.state.colorSelected == 5 ? true : false} onClick={() => this.handleClick(5)} />
                                <Productcolor id={6} color={'#006092'} selected={this.state.colorSelected == 6 ? true : false} onClick={() => this.handleClick(6)} />
                                <Productcolor id={7} color={'#1a1a1a'} selected={this.state.colorSelected == 7 ? true : false} onClick={() => this.handleClick(7)} />
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
                        <Carousel itemsToShow={3} pagination={false} breakPoints={breakPoints}>
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
}

export default Pageproduct










// export default function Pageproduct(){
//     return(
//         <section className="page-product">
//             <Banner image={image} />
//             <div className="product-infos">
//                 <Vehicleinfo isPageVehicle={true} image={imageSpeed} info={'120km/h'}/>
//                 <Vehicleinfo isPageVehicle={true} image={imageGas} info={'20/110'}/>
//             </div>
//             <div className="product-sets">
//                 <div className="container">
//                     <div className="product-color">
//                         <h2>Escolha uma cor!</h2>
//                         <div className="content-colors">
//                             <Productcolor color={'#ffcc00'}/>
//                             <Productcolor color={'#ffffff'}/>
//                             <Productcolor color={'#fe0000'}/>
//                             <Productcolor color={'#6600cd'}/>
//                             <Productcolor color={'#ff7b00'}/>
//                             <Productcolor color={'#006634'}/>
//                             <Productcolor color={'#006092'}/>
//                             <Productcolor color={'#1a1a1a'}/>
//                         </div>
//                     </div>
//                     <div className="product-price">
//                         <img src={mp} alt="" />
//                         <p>550</p>
//                     </div>
//                     <div className="content-button">
//                         <Purchase />
//                     </div>
//                     <div className="cashback"><p>você poderá pedir reembolso em ate x horas spós a confirmação do pagamento</p></div>
//                 </div>
//             </div>
//             <div className="products">
//                 <p>confira também!</p>
//                 <div className="container">
//                     <Carousel itemsToShow={3} pagination={false} breakPoints={breakPoints}>
//                         <Card />
//                         <Card />
//                         <Card />
//                         <Card />
//                         <Card />
//                         <Card />
//                     </Carousel>
//                 </div>
//             </div>
//         </section>
//     )
// }