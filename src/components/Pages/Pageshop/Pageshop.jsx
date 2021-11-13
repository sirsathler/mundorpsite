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
                <div className="pagination">
                    <button><p>Anterior</p></button>
                    <div className='page-now'><p>1</p></div>
                    <button><p>Proximo</p></button>
                </div>
            </div>
            <Shoppacks sectionSelect='premium' title='assine o premium!'/>
            <Shoppacks title='mundopoints'/>
       </div>
    )
}
