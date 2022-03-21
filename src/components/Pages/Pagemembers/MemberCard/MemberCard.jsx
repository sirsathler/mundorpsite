import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers'
import css from './MemberCard.scss'
export default function MemberCard(props) {
    return (
        <div className='member-card'>
            <div className='member-card__image'>
                <img src={props.image} alt="member-image" /> 
            </div>
            <p className='member-card__info member-card__info--name'>{props.name}</p>
            <p className='member-card__info member-card__info--description'>{props.description}</p>
            <p className='member-card__info member-card__info--job'>{props.job}</p>
        </div>
    )
}