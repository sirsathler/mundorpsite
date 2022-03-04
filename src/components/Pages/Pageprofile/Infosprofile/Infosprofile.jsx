import css from './Infosprofile.css'
import axios from 'axios'
import NotFound from '../../../Global/NotFound/NotFound'

export default function Infosprofile(props) {

    return (
        <section className="section-profile">
            <div className="profile-wallpaper">
                <div className="profile-border">
                    <div className="profile-picture"></div>
                    <div className="level-container"><p>{props.level}</p></div>
                </div>
            </div>
            <div className="profile-info">
                <div className="container">
                    <div className="profile-text-wrapper">
                        <p className="profile-text">{props.username}</p>
                        <p className="profile-cargo">{props.job}</p>
                    </div>
                    
                    <div className="user-info">
                        <div className="info-wrapper">
                            <p className="highlight value">{props.rp}</p>
                            <p className="description">ROLEPOINTS</p>
                        </div>
                        <div className="info-wrapper">
                            <p className="highlight value">{props.mp}</p>
                            <p className="description">MUNDO POINTS</p>
                        </div>
                        <div className="info-wrapper">
                            <p className="highlight value">{props.id}</p>
                            <p className="description">PLAYER ID</p>
                        </div>
                    </div>
                </div>
                </div>
        </section>

    )
}
