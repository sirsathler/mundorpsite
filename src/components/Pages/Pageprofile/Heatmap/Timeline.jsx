import css from './Timeline.css'
import image from '../../../../images/icons/marker.png'

function Timeline(props){
    if(props.image == 'icon'){
        return(
            <div className="flex-timeline-single">
                <div className="icon-timeline">
                    <img src={image} alt=""/>
                </div>
                <div className="info-timeline"></div>
            </div>
        )
    }return(
        <div className="flex-timeline-single">
            <div className="info-timeline"></div>
        </div>
    )
}
export default Timeline