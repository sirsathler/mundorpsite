import css from './Carspace.css'

function Carspace(props){
    return(
        <div id={'vehicle'+props.id} className="grid-vehicle">
            <div className="image-car"></div>
            <div className="infos-car">
                <div className="title-car"><p>compre aqui</p></div>
                <div className="subtitle-car"><p>carro</p></div>
            </div>
        </div>
    )
}
export default Carspace