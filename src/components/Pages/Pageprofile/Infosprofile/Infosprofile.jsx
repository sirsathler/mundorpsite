import css from './Infosprofile.css'
import Aboutplayer from './Aboutplayer/Aboutplayer.jsx'

function Infosprofile() {
    return (
        <section className="section-profile">
            <div className="profile-wallpaper">
                <div className="bordinha">
                    <div className="profile-picture"></div>
                    <div className="level-container"><p>56</p></div>
                </div>
            </div>
            <div className="profile-info">
                <div className="profile-text-wrapper">
                    <h1 className="profile-text">NOME</h1>
                    <h2 className="profile-text">CARGO</h2>
                </div>
                <div className="user-info">
                    <div className="info-wrapper">
                        <p className="highlight">000</p>
                        <p className="description">ROLEPOINTS</p>
                    </div>
                    <div className="info-wrapper">
                        <p className="highlight">000</p>
                        <p className="description">MUNDO POINTS</p>
                    </div>
                    <div className="info-wrapper">
                        <p className="highlight">#00000</p>
                        <p className="description">PLAYER ID</p>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Infosprofile