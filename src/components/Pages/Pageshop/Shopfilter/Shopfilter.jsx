import css from './Shopfilter.css'
import Typebutton from './Typebutton.jsx'
import Valuefilter from './Valuefilter.jsx'

function Shopfilter(){
    return(
        <section className='shop-filter'>
            <div className="filter-type">
                <Typebutton />
                <Typebutton />
                <Typebutton />
                <Typebutton />
                <Typebutton />
            </div>
            <div className="filter-value">
                <Valuefilter />
                <Valuefilter />
                <Valuefilter />
                <Valuefilter />
                <Valuefilter />
            </div>
            <div className="filter-search-bar">
                <div className="search-bar-wrapper">
                    <input type="text" placeholder='procurar por produto'/>
                    <span class="material-icons-outlined">search</span>
                </div>
            </div>
        </section>
    )
}
export default Shopfilter