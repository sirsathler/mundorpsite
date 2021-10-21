import css from './Typebutton.css'


export default function Typebutton(props){
    return(
        <div className="type-content" id={props.id}>
            <img src={props.image} alt="" />
        </div>
    )
}