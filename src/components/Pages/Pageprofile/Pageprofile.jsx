import css from './Pageprofile.css'
import Infosprofile from './Infosprofile/Infosprofile.jsx'
import Garage from './Garage/Garage.jsx'
import Heatmap from './Heatmap/Heatmap.jsx'

export default function Pageprofile(){
    return(
        <div className="page-profile">
            <div className="container">
                <Infosprofile />
                <Garage />
                <Heatmap />
            </div>
        </div>
    )
}