import css from './Faq.css'

export default function Faq(props){ 
    return(
        <section className='faq-container'>
            <div className="faq-inner">
                <p className='faq-title highlight'>{props.title}</p>
                <p className='faq-subtitle'>{props.description}</p>
            </div>
        </section>
    )
}