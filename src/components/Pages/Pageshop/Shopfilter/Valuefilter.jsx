import css from './Valuefilter.css'

export default function Valuefilter(props){
    return(
        <div className='value-item' id={props.cssId}>
            <div className="value-text">
                <p>{props.name}</p>
            </div>
            <div className="value-icon">
                <span class="material-icons-outlined">arrow_drop_down</span>
            </div>
        </div>
    )
}