import css from './Bannercarrousel.css'

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

export default function Bannercarrousel(props){
    return(
        <section className='banner-carrousel'>
            <Carousel cols={1} rows={1} gap={0} loop hideArrow showDots mobileBreakpoint={breakpoints} autoplay={2500}> 
                <Carousel.Item>
                     {/*importa a img na sua page e passa como parâmetro pra ca */ }
                    <a href=""><img width="100%" src={props.img} /></a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href=""><img width="100%" src={props.img} /></a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href=""><img width="100%" src={props.img} /></a>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}