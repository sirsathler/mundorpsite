import css from './Progressprofile.css'
import Cards from './Cards.jsx'

function Progressplayer(){
    return(
        <div className="progress-player">
            <div className="progress-cards">
                <Cards id='level' txt='100'/>
                <Cards id='xp' txt='10000'/>
                <Cards id='job' txt='Motorista'/>
                <Cards id='jail' txt='Preso!'/>
                <Cards id='premium'/>
            </div>
        </div>
    )
}
export default Progressplayer