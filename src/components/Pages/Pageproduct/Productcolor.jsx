import styled from "styled-components";

import checkImage from '../../../images/icons/Check.png'

const Boxcolor = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    margin: 5px;
    cursor: pointer;
    background-color: ${props => props.color};
    transition: 0.5s;
    box-shadow: 0px 0 4px 0px #1a1a1a;
    border-radius: 5px;

    &:hover{
        border-radius: 15px;
        transition: 0.5s;
    }

    img{width: 20px;}
`

function chooseColor(){
    let check = document.getElementById('checkColor');
    check.style.borderRadius = '15px'
    check.style.width = '55px'
    check.style.height = '55px'
}

export default function Productcolor(props){
    return(
        <Boxcolor id='checkColor' onClick={chooseColor} color={props.color}>

        </Boxcolor>
    )
}