import css from './Pagemembers.css'
import MemberCard from './MemberCard/MemberCard'

export default function Pagemembers() {
    return (

        <div>
            <section className='members-info'>
                <div className='members-text-wrapper'>

                    <p className='members-text highlight'>NOSSO TIME</p>
                    <p className='members-subtext'>CONHEÇA AQUELES RESPONSÁVEIS PELO PROJETO ESTAR NO AR!</p>
                </div>
            </section>
            <section className=''>
                <MemberCard></MemberCard>

            </section>
            <section className='members-info'>
                <p className='members-text highlight'>DEVS</p>
            </section>

        </div >

    )
}