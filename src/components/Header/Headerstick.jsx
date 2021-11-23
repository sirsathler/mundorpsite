import css from './Headerstick.css'
import Playerview from './Playerview.jsx'
import Login from './Login.jsx'

import imgHome from '../../images/icons/home.png'
import imgNotifications from '../../images/icons/notifications.png'
import imgCheckout from '../../images/icons/checkout.png'

let infosHeader = [
    {
        'id' : 1,
        'img' : 'https://i.postimg.cc/vcpXhbsF/rp.png',
        'infoPlayer' : '5000'
    },
    {
        'id' : 2,
        'img' : 'https://i.postimg.cc/jLWZyCB4/mp.png',
        'infoPlayer' : '12000'
    },
    {
        'id' : 3,
        'img' : 'https://i.postimg.cc/WtY5D0Y4/lvl.png',
        'infoPlayer' : '35'
    },
    {
        'id' : 4,
        'img' : 'https://i.postimg.cc/yW8fYLP5/job.png',
        'infoPlayer' : 'vagabundo'
    }
]

export default function Headerstick(){
    return(
        <div className='header-sticky'>
            <div className="container">
                <div className="header-info-player">
                    {
                        infosHeader.map((info) =>(
                            <Playerview key={info.id} image={info.img} 
                            infoPlayer={info.infoPlayer}/>
                        ))
                    }
                </div>
                <div className="header-action">
                    <div className="action-links">
                        <a href=""><img src={imgHome} alt="" /></a>
                        <a href=""><img src={imgCheckout} alt="" /></a>
                        <a href=""><img src={imgNotifications} alt="" /></a>
                    </div>
                    <div className="header-login">
                        <Login />
                    </div>
                </div>
            </div>
        </div>
    )
}