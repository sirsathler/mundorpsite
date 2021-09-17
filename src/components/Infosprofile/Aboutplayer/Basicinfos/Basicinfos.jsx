import css from './Basicinfos.css'
import Wallet from './Wallet.jsx'

function Basicinfos(){
    return(
        <div className="basic-infos">
            <div className="void"></div>
            <div className="controller-basic-infos">
                <div className="nickname">
                    <p>SrDuchannes #666</p>
                </div> 
                <div className="wallet-player">
                    <Wallet cashValor='90000' exchange='mp'/>
                    <Wallet cashValor='3500'/>
                </div>
            </div>
        </div>
    )
}
export default Basicinfos