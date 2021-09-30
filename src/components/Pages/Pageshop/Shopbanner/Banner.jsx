import css from './Banner.css'
import Carousel from 'react-elastic-carousel'

function Banner(){
    return(
        <section className='banner'>
            <Carousel showArrows={false}>
                <a href=""><div className="banner-image"></div></a>
                <a href=""><div className="banner-image"></div></a>
                <a href=""><div className="banner-image"></div></a>
                <a href=""><div className="banner-image"></div></a>
            </Carousel>
        </section>
    )
}
export default Banner