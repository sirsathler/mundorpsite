import css from './Infosprofile.css'
import Aboutplayer from './Aboutplayer/Aboutplayer.jsx'

function Infosprofile(){
    return(
        <section className="infos-profile">
             <div className="photo-profile">
                <div className="photo-player">
                    <div className="photo-content"></div>
                </div>
             </div>
             <div className="bg-profile">

            </div>
            <Aboutplayer />
        </section>
    )
}
export default Infosprofile