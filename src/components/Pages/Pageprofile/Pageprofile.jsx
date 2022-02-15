import css from './Pageprofile.css'

export default function Pageprofile(){
    return(
        <div className="page-profile">
            <div className="container">
                <section className='heatmap'>
                    <h2>Ficha do jogador</h2>
                    <div className="timeline">
                        <div className="date-timeline">
                            <p>14</p>
                            <p>FEB</p>
                        </div>
                        <div className="point-timeline">
                            <div className="void"></div>
                            <div className="content-circle">
                                <div className="circle">
                                    <div className="inside-circle"></div>
                                </div>
                            </div>
                            <div className="conect-timeline"></div>
                        </div>
                        <div className="content-timeline"></div>
                    </div>
                </section>
            </div>
        </div>
    )
}