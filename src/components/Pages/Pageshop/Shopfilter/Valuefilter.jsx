import css from './Valuefilter.css'

function Valuefilter(props){
    return(
        <div className='value-item'>
            <div className="value-text">
                <p>{props.name}</p>
            </div>
            <div className="value-icon">
                <span class="material-icons-outlined">arrow_drop_down</span>
            </div>
        </div>
    )
}
export default Valuefilter