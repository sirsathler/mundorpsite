import css from './Pagelogin.css'

import mundoImage from '../../../images/logo.png'
import seasonLogoImage from '../../../images/login/season-logo-img.png'

import Inputlogin from '../../Global/Inputs/Inputlogin'
import Boxregister from './Register/Boxregister'
import Buttonlogin from '../../Global/Buttons/Buttonlogin'
import Registerprogress from './Registerprogress/Registerprogress'

let nextRegister = 1

export default function Pagelogin(){
    return(
        <div className='page-login-register'>
            <section className="page-login">
                <div className="login">
                    <img className='season-logo-img' src={seasonLogoImage} alt="" />
                    <div className="box-login">
                        <div className="box-images-login">
                            <img src={mundoImage} alt="" />
                        </div>
                        <div className="box-input">
                            <Inputlogin type='text' placeholder='E-mail' icon='person'/>
                            <Inputlogin type='password' placeholder='Senha' icon='lock'/>
                            <Buttonlogin action='entrar'/>
                        </div>
                    </div>
                </div>
            </section>
            <section className='register'>
                <h2>ainda não possui uma conta? registre-se!</h2>
                <Registerprogress step={nextRegister}/>
                <Boxregister step={nextRegister}/>
            </section>
        </div>
    )
}