import css from './Shoppacks.css';
import Card from '../Shopcards/Card';


export default function Shoppacks(props){
    if(props.color!='white'){
        return(
            <section className="shop-packs">
                <div className="container">
                    <div className="pack-titulo">
                        <h2>
                            assine o premium!
                        </h2>
                    </div>
                    <div className="pack-cards">
                        <Card/>
                        <Card/>
                        <Card/>
    
                    </div>
                </div>
            </section>
        )
    }
    return(
        <section className="shop-packs">
            <div className="container">
                <div className="pack-titulo">
                    <h2>
                        mundopoints
                    </h2>
                </div>
                <div className="pack-cards">
                    <Card/>
                    <Card/>
                    <Card/>

                </div>
            </div>
        </section>
    )
}