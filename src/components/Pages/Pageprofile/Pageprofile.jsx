import css from './Pageprofile.css'

import Timeline from './Timeline'

export default function Pageprofile(){
    return(
        <div className="page-profile">
            <div className="container">
                <section className='heatmap'>
                    <h2>Ficha do jogador</h2>
                    <Timeline />
                    <Timeline />
                    <Timeline />
                    <Timeline />
                    <Timeline />
                    <Timeline />
                </section>
            </div>
        </div>
    )
}