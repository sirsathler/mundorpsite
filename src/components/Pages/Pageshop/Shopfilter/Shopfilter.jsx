import Searchbar from '../../../Global/Buttons/Searchbar'
import css from './Shopfilter.css'
import Typebutton from './Typebutton.jsx'
import Valuefilter from './Valuefilter.jsx'

let iconList = [
    {
        "id": 1,
        "name": "home",
        "image": "https://imgur.com/iXgrWOm.png"
    },
    {
        "id": 2,
        "name": "car",
        "image": "https://imgur.com/lg3HAUQ.png"
    },
    {
        "id": 3,
        "name": "clots",
        "image": "https://imgur.com/lwbHP7j.png"
    },
    {
        "id": 4,
        "name": "furniture",
        "image": "https://imgur.com/sKrKfcz.png"
    },
    {
        "id": 5,
        "name": "guns",
        "image": "https://imgur.com/zHoE6UM.png"
    }
]

let nameFilter = [
    {
        "id": 1,
        "name" : "premium",
        "cssId": "premium"
    },
    {
        "id": 2,
        "name" : "preço Min",
        "cssId": "price-min"
    },
    {
        "id": 3,
        "name" : "preço Max",
        "cssId": "price-max"
    },
    {
        "id": 4,
        "name" : "moeda",
        "cssId": "currency"
    }
]

export default function Shopfilter(){
    return(
        <section className='shop-filter'>
            <div className="filter-type">
                {
                    iconList.map((icon)=>(
                        <Typebutton key={icon.id} id={icon.name} image={icon.image}/>
                    ))
                }
            </div>
            <div className="filter-value">
                {
                    nameFilter.map((type)=>(
                        <Valuefilter key={type.id} name={type.name} cssId={type.cssId}/>
                    ))
                }
            </div>
            <div className="filter-search-bar">
                <Searchbar />
            </div>
        </section>
    )
}