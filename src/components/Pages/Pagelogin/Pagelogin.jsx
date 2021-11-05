import css from './Pagelogin.css'


import mundoImage from '../../../images/logo-minimalist.png'
import seasonImage from '../../../images/season-logo.png'
import Inputlogin from '../../Global/Inputs/Inputlogin'
import Boxregister from '../../Global/Register/Boxregister'
import Buttonlogin from '../../Global/Buttons/Buttonlogin'

export default function Pagelogin(){
    return(
        <div className="page-login">
            <section className="login">
                <div className="box-login">
                    <div className="box-images-login">
                        <img src={mundoImage} alt="" />
                        <img src={seasonImage} alt="" />
                    </div>
                    <div className="box-input">
                        <Inputlogin type='text' placeholder='E-mail' icon='person'/>
                        <Inputlogin type='password' placeholder='Senha:' icon='lock'/>
                        <Buttonlogin />
                    </div>
                </div>
            </section>
            <section className='register'>
                <Boxregister step={1}/>
            </section>
        </div>
    )
}