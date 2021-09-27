import css from './Shopcards.css'
import Card from './Card.jsx'

function Shopcards(){
    return(
        <section className='cards-wrapper'>
            <Card image='agor' namecar='agor' valor='550'/>
            <Card image='ares' namecar='ares' valor='700'/>
            <Card />
        </section>
    )
}
export default Shopcards