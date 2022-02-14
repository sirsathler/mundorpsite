import css from "./Pagestorage.css"
export default function Pagestorage() {

    return (
        <div>
            <section className="storage-header">
                <div className="storage-title">
                    <p>Seu armazém de itens</p>
                </div>
                <div className="storage-info-container">
                    <div className="storage-wrapper">
                        <p className="highlight">5</p>
                        <p className="description">Itens no armazém</p>
                    </div>
                    <div className="storage-wrapper">
                        <p className="highlight">20</p>
                        <p className="description">Capacidade máxima</p>
                    </div>
                    <div className="storage-wrapper">
                        <p className="highlight">68000MP</p>
                        <p className="description">Valor de armazém</p>
                    </div>
                </div>
            </section>

            <section className="section-storage">
                <div>
                    <div className='section-text'>
                        <p>Você não possui itens no armazém compre algo na <a href='/shop' className="highlight">LOJA!</a></p>
                    </div>
                </div>
                <p className="description text-bottom" >Retire o item acessando o celular dentro do jogo!</p>
            </section>
        </div>
    )
}
