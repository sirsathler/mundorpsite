import css from './Cards.css'

function Cards(props){
    if(props.txt == null){
        return(
            <div id={props.id+'-player'} className="card-player">
                <div className="card-image">
                    <div className="image-content"></div>
                </div>
            </div>
        )
    }return(
        <div id={props.id+'-player'} className="card-player">
            <div className="card-image">
                <div className="image-content"></div>
            </div>
            <div className="card-text">
                <p>{props.txt}</p>
            </div>
        </div>
    )
}
export default Cards