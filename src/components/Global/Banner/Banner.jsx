import css from './Banner.css'

import Returnpage from '../Buttons/Returnpage'
import Options from '../Buttons/Options'

export default function Banner(){
    return(
        <section className='banner'>
            <div className="container">
                <div className="banner-top">
                    <div className="content-button">
                        <Returnpage />
                    </div>
                    <div className="search-bar-wrapper">
                        <div className="search-bar">
                            <input type="text" placeholder='procurar por produto'/>
                            <span class="material-icons-outlined">search</span>
                        </div>
                    </div>
                    <div className="content-button">
                        <Options />
                    </div>
                </div>
                <div className="banner-center">
                </div>
                <div className="banner-bottom">
                    
                </div>
            </div>
        </section>
    )
}