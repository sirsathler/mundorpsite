import css from './Playerview.css'

export default function Playerview(props){
    return(
        <div className="player-overview">
            <div className="overview-image">
                <img src={props.image} alt="" />
            </div>
            <div className="overview-info"><p>{props.infoPlayer}</p></div>
        </div>
    )
}