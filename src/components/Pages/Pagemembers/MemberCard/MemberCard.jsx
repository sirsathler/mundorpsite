import css from './MemberCard.scss'
export default function MemberCard() {
    return (
        <div className='member-card'>
            <div className='member-card__image'>
               
            </div>
            <p className='member-card__info member-card__info--name'>Matheus Sathler</p>
            <p className='member-card__info member-card__info--description'>UM EXÍMIO GAROTO DE PROGRAMA</p>
            <p className='member-card__info member-card__info--job'>DONO DO PROJETO</p>
        </div>
    )
}