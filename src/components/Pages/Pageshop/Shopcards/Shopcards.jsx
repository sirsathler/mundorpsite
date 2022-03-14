import css from './Shopcards.css'
import Card from './Card.jsx'
import { propTypes } from 'react-grid-carousel'

export default function Shopcards(props){
    return(
        <div className="cards-wrapper">
            {
                props.cards.map((product)=>(
                    <Card id={product.Id} url={product.Url} name={product.Name} price={product.Price} type={product.Type} premium={true}/>
                ))
            }
        </div>
    )
}