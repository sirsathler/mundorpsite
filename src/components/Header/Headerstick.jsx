import css from './Headerstick.css'
import Points from './Points.jsx'
import Login from './Login.jsx'

export default function Headerstick(){
    return(
        <div className='header-sticky'>
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
    )
}