import css from './Header.css'
import Points from './Points.jsx'

function Header(){
    return(
        <header>
            <div className="container">
                <div className="controller-header">
                    <div className="top-header">
                        <div className="photo-header"></div>
                    </div>
                    <div className="bottom-header">
                        <div className="data-points">
                            <Points />
                            <Points />
                        </div>
                        <div className="login-header"></div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header