import css from './Card.css'

export default function Card(props){
    return(
        <div className='card'>
            <div className="card-image">
                <img src={props.image} alt="" />
            </div>
            <div className="card-infos">
                <p>{props.name}</p>
                <p>{props.price}</p>
            </div>
        </div>
    )
}