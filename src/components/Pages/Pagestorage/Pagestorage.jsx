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

                        <p className="storage-value">5</p>
                        <p>Itens no armazém</p>

                    </div>

                    <div className="storage-wrapper">

                        <p className="storage-value">20</p>
                        <p>Capacidade máxima</p>

                    </div>

                    <div className="storage-wrapper">

                        <p className="storage-value">68000MP</p>
                        <p>Valor de armazém</p>

                    </div>

                </div>

            </section>
            
            <section className="section-buy-itens">
                <div className='section-text'>
                    <p>Você não possui itens no armazém compre algo na <a href='#' id='shop'>LOJA!</a></p>

                </div>
                <p id='text-botton'>Retire o item acessando o celular dentro do jogo!</p>
            </section>

        </div>
    )
}
