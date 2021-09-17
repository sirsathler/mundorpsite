import css from './Wallet.css'
import imagemp from '../../../../images/icons/mp-icon.png'
import imagerp from '../../../../images/icons/rp-icon.png'

function Wallet(props){
    if(props.exchange == 'mp'){
        return(
            <div className="wallet">
                <div className="valor">
                    <div className="image">
                        <img src={imagemp}/>
                    </div>
                    <div className="content-valor">
                        <p>{props.cashValor}</p>
                    </div>
                </div>
            </div>
        )
    }return(
        <div className="wallet">
            <div className="valor">
                <div className="image">
                    <img src={imagerp}/>
                </div>
                <div className="content-valor">
                    <p>{props.cashValor}</p>
                </div>
            </div>
        </div>
    )
}
export default Wallet