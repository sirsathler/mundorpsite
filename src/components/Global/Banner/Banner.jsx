import css from './Banner.css'

import Returnpage from '../Buttons/Returnpage'
import Options from '../Buttons/Options'
import Searchbar from '../Buttons/Searchbar'

export default function Banner(){
    return(
        <section className='banner'>
            <div className="container">
                <div className="banner-top">
                    <div className="content-button">
                        <Returnpage />
                    </div>
                    <div className="search-bar-wrapper">
                        <Searchbar />
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