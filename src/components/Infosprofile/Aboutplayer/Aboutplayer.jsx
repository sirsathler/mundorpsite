import css from './Aboutplayer.css'
import Basicinfos from "./Basicinfos/Basicinfos.jsx"
import Progressplayer from "./Progressplayer/Progressplayer.jsx"

function Aboutplayer(){
    return(
        <div className="about-player">
            <Basicinfos />
            <Progressplayer />
        </div>
    )
}
export default Aboutplayer