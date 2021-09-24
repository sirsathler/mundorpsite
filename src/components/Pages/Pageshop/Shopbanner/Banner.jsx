import css from './Banner.css'
import Carousel from 'react-elastic-carousel'

function Banner(){
    return(
        <section className='banner'>
            <Carousel showArrows={false}>
                <div className="banner-image"></div>
                <div className="banner-image"></div>
                <div className="banner-image"></div>
                <div className="banner-image"></div>
            </Carousel>
        </section>
    )
}
export default Banner