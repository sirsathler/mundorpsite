import css from './Bannercarrousel.css'
import Carousel from 'react-elastic-carousel'

export default function Bannercarrousel(){
    return(
        <section className='banner-carrousel'>
            <Carousel showArrows={false} enableAutoPlay={true}>
                <a href=""><div className="banner-image"></div></a>
                <a href=""><div className="banner-image"></div></a>
                <a href=""><div className="banner-image"></div></a>
                <a href=""><div className="banner-image"></div></a>
            </Carousel>
        </section>
    )
}