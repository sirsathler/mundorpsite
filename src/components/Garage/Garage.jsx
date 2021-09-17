import css from './Garage.css'
import Carspace from './Carspace'

function Garage(){
    return(
        <section className="vehicles">
            <div className="vehicles-title"><p>Garagem</p></div>
            <div className="vehicles-wrapper">
                <Carspace id='1'/>
                <Carspace id='2'/>
                <Carspace id='3'/>
                <Carspace id='4'/>
                <Carspace id='5'/>
                <Carspace id='6'/>
            </div>
        </section>
    )
}
export default Garage