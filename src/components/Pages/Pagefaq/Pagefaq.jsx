import Faq from './Faq/Faq.jsx'
import css from './Pagefaq.css'

export default function Pagefaq(){
    return(
        <div>
            <section className='faq-header-container'>
                <p className='faq-header-title highlight'>FAQ</p>
                <p className='faq-header-subtitle description'>LEIA AS PERGUNTAS MAIS FREQUENTES DE NOSSA COMUNIDADE!</p>
            </section>
            <div>
                <Faq title="titulo1" description="description1"/>
                <Faq/>
                <Faq/>
                <Faq/>
                <Faq/>
                <Faq/>
                <Faq/>
                <Faq/>
            </div>
        </div>
    )
}
