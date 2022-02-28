import css from './Pagehome.css'

import premiumImage from '../../../images/logo.png'
import bannerImage from '../../../images/Banner.png'

import Carousel from 'react-elastic-carousel'
import Cardnews from '../../Global/Cards/Cardnews'
import Bannercarrousel from '../Pageshop/Shopbanner/Bannercarrousel'

var breakPoint = [
      { width: 1, itemsToShow: 1 },
      { width: 700, itemsToShow: 2, itemsToScroll: 2},
      { width: 1000, itemsToShow: 3 }
]

export default function Home(){
    return(
        <div className="home">
            <Bannercarrousel img={bannerImage}/>
            <div className="mundo-premium-img">
                <img src={premiumImage} alt="" />
            </div>
            <a href="./shop" target="_blank">
                <section className="shop-home">
                    <div className="container">
                        <p>loja oficial</p>
                    </div>
                </section>
            </a>
            <section className="news">
                <div className="container">
                    <h2>ultimas notícias!</h2>
                    <Carousel itemsToShow={3} showArrows={false} breakPoints={breakPoint}>
                        <Cardnews /*imagem do card aqui via props*//>
                        <Cardnews />
                        <Cardnews />
                        <Cardnews />
                        <Cardnews />
                        <Cardnews />
                    </Carousel>
                </div>
            </section>
        </div>
    )
}

