import css from "./Pagestorage.css"
export default function Pagestorage(){

    return(
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

        </div>
    )}