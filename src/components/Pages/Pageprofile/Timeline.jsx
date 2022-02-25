import css from './Timeline.css'

import circletimeline from '../../../images/icons/time_marker.png'

export default function Pageprofile(){
    return(
        <div className="timeline">
            <div className="date-timeline">
                <p>14</p>
                <p>FEB</p>
            </div>
            <div className="connection-timeline">
                <div className='connection-line'></div>
                <img src={circletimeline} alt="" />
                <div className='connection-line'></div>
            </div>
            <div className="content-timeline">
                <div className="arrow-cool"></div>
                <div className='player-highliths'><p>Criou um virus</p></div>
                <div className='highlith-time'><p>10:50</p></div>
            </div>
        </div>
    )
}