import styled from "styled-components";

const Boxcolor = styled.div`
    width: 50px;
    height: 50px;
    margin: 5px;
    cursor: pointer;
    background-color: ${props => props.color};
    transition: 0.5s;
    border: 1px solid #00000047;

    &:hover{
        transform: rotate(-90deg); 
        transition: 1s;
    }

`

export default function Productcolor(props){
    return(
        <Boxcolor color={props.color}>

        </Boxcolor>
    )
}