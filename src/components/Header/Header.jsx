import css from './Header.css'
import Points from './Points.jsx'
import Login from './Login.jsx'

import image from '../../images/logo-minimalist.png'

export default function Header(){
    return(
        <header>
            <img src={image} alt="" />
        </header>
    )
}