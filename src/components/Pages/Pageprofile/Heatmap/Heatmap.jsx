import css from './Heatmap.css'
import Timeline from './Timeline.jsx'

function Heatmap(){
    return(
        <section className="heatmap">
            <div className="heatmap-title"><p>Ficha do jogador</p></div>
            <div className="container-heatmap">
                <div className="timeline-left">
                    <div className="flex-timeline">
                        <Timeline />
                        <Timeline />
                        <Timeline />
                        <Timeline />
                        <Timeline />
                    </div>
                </div>
                <div className="timeline-right">
                    <div className="flex-timeline">
                        <Timeline image='icon'/>
                        <Timeline image='icon'/>
                        <Timeline image='icon'/>
                        <Timeline image='icon'/>
                        <Timeline image='icon'/>
                        <Timeline image='icon'/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Heatmap
