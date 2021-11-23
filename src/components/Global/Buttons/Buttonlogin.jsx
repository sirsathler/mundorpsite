import css from './Buttonlogin.css'

import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    max-width: 180px;
    height: 50px;
    background-color: ${props => props.type == 'login' ? '#3480a8': '#fb340e'};
    font-size: 1.2rem;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
`

export default function Buttonlogin(props){
    if(props.action == 'entrar'){
        return(
            <Button type='login'>{props.action}</Button>
        )
    }return(
        <Button className='button-page-login' type='register'>{props.action}</Button>
    )
}