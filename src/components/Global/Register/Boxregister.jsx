import Inputlogin from '../Inputs/Inputlogin'
import css from './Boxregister.css'


export default function Boxregister(props){
    if(props.step === 1){
        return(
            <div className='box-register'>
                <h2>criar conta</h2>
                <Inputlogin />
                <Inputlogin />
                <Inputlogin />
                <Inputlogin />
            </div>
         )
    }else if(props.step === 2){
        return(
            <div className='box-register'>
            </div>
         )
    }return(
        <div className='box-register'>
            
        </div>
     )
}