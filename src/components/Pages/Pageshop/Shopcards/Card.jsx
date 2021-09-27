import css from './Card.css'
import agor from '../../../../images/shop/cars/Agor.png'
import ares from '../../../../images/shop/cars/Ares7.png'
import dts from '../../../../images/shop/cars/DTS.png'

function Card(props){
    if(props.image == 'agor'){
        return(
            <div className='card'>
                <div className="card-image">
                    <img src={agor} alt="" />
                </div>
                <div className="card-infos">
                    <p>{props.namecar}</p>
                    <p>{props.valor}</p>
                </div>
            </div>
        )
    }
    return(
        <div className='card'>
            <div className="card-image">
                <img src={ares} alt="" />
            </div>
            <div className="card-infos">
                <p>{props.namecar}</p>
                <p>{props.valor}</p>
            </div>
        </div>
    )
}
export default Card