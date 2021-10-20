import css from './Header.css'
import Points from './Points.jsx'
import Login from './Login.jsx'

function Header(){
    return(
        <header>
            <div className="header-controller">
                <div className="header-top">
                    <div className="header-photo"></div>
                </div>
                <div className="header-bottom">
                    <div className="container">
                        <div className="data-points">
                            <Points exchange='rp' />
                            <Points />
                        </div>
                        <div className="header-login">
                            <Login />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header