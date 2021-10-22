import css from './Points.css'
import imagerp from '../../images/shop/icons/rp.png'
import imagemp from '../../images/shop/icons/mp.png'

export default function Points(props){
    if(props.exchange == 'rp'){
        return(
            <div className="points">
                <div className="image-points">
                    <img src={imagerp} alt="" />
                </div>
                <div className="content-points"></div>
            </div>
        )
    }return(
        <div className="points">
            <div className="image-points">
                <img src={imagemp} alt="" />
            </div>
            <div className="content-points"></div>
        </div>
    )
}