import css from './Pagehome.css'

import premiumImage from '../../../images/home/premium_alt.png'

import Carousel from 'react-elastic-carousel'
import Cardnews from '../../Global/Cards/Cardnews'
import Bannercarrousel from '../Pageshop/Shopbanner/Bannercarrousel'



export default function Home(){
    return(
        <div className="home">
            <Bannercarrousel/>
            <div className="mundo-premium-img">
                <img src={premiumImage} alt="" />
            </div>
            <div className="news">
                <div className="container">
                    <h2>ultimas notícias</h2>
                    <Carousel itemsToShow={3}>
                        <Cardnews />
                        <Cardnews />
                        <Cardnews />
                        <Cardnews />
                        <Cardnews />
                        <Cardnews />
                    </Carousel>
                </div>
            </div>
        </div>
    )
}