import css from './Pageshop.css'
import Banner from './Shopbanner/Banner.jsx'
import Shopcards from './Shopcards/Shopcards.jsx'
import Shopfilter from './Shopfilter/Shopfilter.jsx'
import Shoppacks from './Shoppacks/Shoppacks'

function Pageshop(){
    return(
       <div className="page-shop">
            <Banner />
            <div className="container">
                <Shopfilter />
                <Shopcards />
            </div>
            <Shoppacks />
            <Shoppacks color = "white"/>
       </div>
    )
}
export default Pageshop