import styled from "styled-components";

const Boxcolor = styled.div`
    width: 50px;
    height: 50px;
    margin: 5px;
    cursor: pointer;
    background-color: black;

    &:hover{
        border: 2px solid orange;
    }

`

export default function Productcolor(){
    return(
        <Boxcolor>

        </Boxcolor>
    )
}