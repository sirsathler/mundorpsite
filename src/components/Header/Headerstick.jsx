import css from './Headerstick.css'
import Points from './Points.jsx'
import Login from './Login.jsx'

export default function Headerstick(){
    return(
        <header>
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
        </header>
    )
}