import css from './Pageprofile.css'
import Infosprofile from '../components/Infosprofile/Infosprofile.jsx'
import Garage from '../components/Garage/Garage.jsx'
import Heatmap from '../components/Heatmap/Heatmap.jsx'
import Footer from '../components/Footer/Footer.jsx'

function Pageprofile(){
    return(
        <div className="page-profile">
            <div className="container">
                <Infosprofile />
                <Garage />
                <Heatmap />
                <Footer />
            </div>
        </div>
    )
}
export default Pageprofile