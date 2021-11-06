import css from './Pageshop.css'
import Bannercarrousel from './Shopbanner/Bannercarrousel.jsx'
import Shopcards from './Shopcards/Shopcards.jsx'
import Shopfilter from './Shopfilter/Shopfilter.jsx'
import Shoppacks from './Shoppacks/Shoppacks'

export default function Pageshop(){
    return(
       <div className="page-shop">
            <Bannercarrousel />
            <div className="container">
                <Shopfilter />
                <Shopcards />
            </div>
            <Shoppacks sectionSelect='premium' title='assine o premium!'/>
            <Shoppacks title='mundopoints'/>
       </div>
    )
}
