import css from './Faq.css'

export default function Faq(props){ 
    console.log(props.title)
    return(
        <section className='faq-container'>
            <div className="faq-inner">
                <p className='faq-title highlight'>{props.title}</p>
                <p className='faq-subtitle'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum ipsam, ducimus architecto nesciunt quod veritatis sint quam in aliquid, sed dolorem. Omnis iste praesentium unde, at error dolor architecto repellat.</p>
            </div>
        </section>
    )
}