import { useEffect, useState } from "react";
import styled from "styled-components";

import checkImage from '../../../images/icons/Check.png'

const Boxcolor = styled.div`

    background-color: ${props => props.color};

    &:hover{
        border-radius: 15px;
        transition: 0.5s;
    }

    img{width: 20px;}
`
export default function Productcolor(props){
    return(
        <Boxcolor className="imgBox" color={props.color} onClick={props.onClick}>
            <img className={props.selected ? 'check-color' : null} src={checkImage} alt="colorImg" />
        </Boxcolor>
    )
}