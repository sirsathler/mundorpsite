import css from './Inputlogin.css'


export default function Inputlogin(props){
    return(
        <div className="content-input">
            <input type={props.type} placeholder={props.placeholder}/>
            <span class="material-icons-outlined">
                {props.icon}
            </span>
        </div>
    )
}