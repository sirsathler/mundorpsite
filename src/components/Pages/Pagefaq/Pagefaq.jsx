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
                <Faq title="titulo2" description="description2"/>
                <Faq title="titulo3" description="description3"/>
                <Faq title="titulo4" description="description4"/>
                <Faq title="titulo5" description="description5"/>
                <Faq title="titulo6" description="description6"/>
                <Faq title="titulo7" description="description7"/>
                <Faq title="titulo8" description="description8"/>
            </div>
        </div>
    )
}
