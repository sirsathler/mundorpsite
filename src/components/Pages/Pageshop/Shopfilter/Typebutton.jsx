import css from './Typebutton.css'
import carImage from '../../../../images/shop/icons/car.png'


function Typebutton(){
    return(
        <a href="">
            <div className="type-content">
                <img src={carImage} alt="" />
            </div>
        </a>
    )
}
export default Typebutton