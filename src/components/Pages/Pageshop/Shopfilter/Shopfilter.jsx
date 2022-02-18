import Searchbar from '../../../Global/Buttons/Searchbar'
import css from './Shopfilter.css'
import Typebutton from './Typebutton.jsx'
import Valuefilter from './Valuefilter.jsx'

let nameFilter = [
    {
        "id": 1,
        "name": "premium",
        "cssId": "premium"
    },
    {
        "id": 2,
        "name": "preço Min",
        "cssId": "price-min"
    },
    {
        "id": 3,
        "name": "preço Max",
        "cssId": "price-max"
    },
    {
        "id": 4,
        "name": "moeda",
        "cssId": "currency"
    }
]

export default function Shopfilter() {

    return (
        <section className='shop-filter'>
            <div className="filter-type">
                <div className="type-content">
                    <img src={require('../../../../images/shop/icons/buildings.png').default} alt="" />
                </div>
                <div className="type-content">
                    <img src={require('../../../../images/shop/icons/buildings.png').default} alt="" />
                </div>
                <div className="type-content">
                    <img src={require('../../../../images/shop/icons/buildings.png').default} alt="" />
                </div>
                <div className="type-content">
                    <img src={require('../../../../images/shop/icons/buildings.png').default} alt="" />
                </div>
                <div className="type-content">
                    <img src={require('../../../../images/shop/icons/buildings.png').default} alt="" />
                </div>
            </div>
            <div className="filter-value">
                <div className='value-item'>
                </div>
            </div>
            <div className="filter-search-bar">
                <Searchbar />
            </div>
        </section>
    )
}