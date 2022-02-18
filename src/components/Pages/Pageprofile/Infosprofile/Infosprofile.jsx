import css from './Infosprofile.css'
import Aboutplayer from './Aboutplayer/Aboutplayer.jsx'
import axios from 'axios'

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
                <div className="profile-text-wrapper">
                    <h1 className="profile-text">{props.username}</h1>
                    <h2 className="profile-cargo">{props.job}</h2>
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
        </section>
    )
}
