import css from './Banner.css'
import Carousel from 'react-elastic-carousel'

export default function Banner(){
    return(
        <section className='banner'>
            <Carousel showArrows={false} enableAutoPlay={true}>
                <a href=""><div className="banner-image"></div></a>
                <a href=""><div className="banner-image"></div></a>
                <a href=""><div className="banner-image"></div></a>
                <a href=""><div className="banner-image"></div></a>
            </Carousel>
        </section>
    )
}