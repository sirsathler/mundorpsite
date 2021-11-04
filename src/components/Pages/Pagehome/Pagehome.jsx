import css from './Pagehome.css'

import Carousel from 'react-elastic-carousel'
import Cardnews from '../../Global/Cards/Cardnews'
import Bannercarrousel from '../Pageshop/Shopbanner/Bannercarrousel'

export default function Home(){
    return(
        <div className="home">
            <Bannercarrousel />
            <section className=''>

            </section>
            <section className="image-to-shop">

            </section>
            <section className='news'>
                <div className="container">
                    <Carousel itemsToShow={3} pagination={false}>
                        <Cardnews />
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