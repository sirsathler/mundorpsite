import css from './Boxregister.css'

import Token from '../Step2/Token'
import Buttonlogin from '../../../Global/Buttons/Buttonlogin'
import Inputlogin from '../../../Global/Inputs/Inputlogin'

import imagecheck from '../../../../images/icons/Check.png'

export default function Boxregister(props){
    if(props.step === 1){
        return(
            <div className='box-register'>
                <h2>criar conta</h2>
                <Inputlogin type='text' placeholder='usuario:' icon='person'/>
                <Inputlogin type='email' placeholder='Email:' icon='email'/>
                <Inputlogin type='password' placeholder='senha:' icon='lock'/>
                <Inputlogin type='password' placeholder='confirme a senha:' icon='lock'/>
                <Buttonlogin action='registrar'/>
            </div>
         )
    }else if(props.step === 2){
        return(
            <div className='box-register'>
                <Token />
                <Buttonlogin action='enviar token'/>
            </div>
         )
    }return(
        <div className='box-register'>
            <img src={imagecheck} alt="" />
            <h2>bem vindo ao mundo!</h2>
            <p>você já pode fazer login</p>
        </div>
     )
}