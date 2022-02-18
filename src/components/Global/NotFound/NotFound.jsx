import css from "./NotFound.css";
import logo from "../../../images/mundo-placeholder.png"

export default function NotFound() {

    return (

        <section className="not-found-container">
            <div className="not-found-inner">
                <div className="img-wrapper">
                    <img className="not-found-img" src={logo} alt="Not-Found" />
                </div>
                <a className="not-found-text" href="#">Página não encontrada</a>
            </div>
                <a className="not-found-return" href="#">voltar para a página inicial</a>
        </section>
    )
}