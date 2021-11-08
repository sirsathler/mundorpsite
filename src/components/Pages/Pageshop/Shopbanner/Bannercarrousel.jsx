import css from './Bannercarrousel.css'
import bannerImage from '../../../../images/shop/BannerP208.png'

import Carousel from 'react-grid-carousel'


let breakpoints = [
    {
      breakpoint: 767,
      cols: 1,
      rows: 1,
      dots: true,
      gap: 0,
      scrollSnap : true,
      loop: true,
    }
]

export default function Bannercarrousel(){
    return(
        <section className='banner-carrousel'>
            <Carousel cols={1} rows={1} gap={0} loop hideArrow showDots mobileBreakpoint={breakpoints} autoplay={1800}> 
                <Carousel.Item>
                    <a href=""><img width="100%" src={bannerImage} /></a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href=""><img width="100%" src={bannerImage} /></a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href=""><img width="100%" src={bannerImage} /></a>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}