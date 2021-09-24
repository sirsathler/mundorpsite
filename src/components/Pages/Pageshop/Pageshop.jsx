import css from './Pageshop.css'
import Banner from './Shopbanner/Banner.jsx'
import Shopcards from './Shopcards/Shopcards.jsx'

function Pageshop(){
    return(
       <div className="page-shop">
            <Banner />
            <div className="container">
                <Shopcards />
            </div>
       </div>
    )
}
export default Pageshop