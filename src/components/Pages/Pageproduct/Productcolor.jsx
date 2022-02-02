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



var imgBox = document.querySelectorAll("imgBox") //funcionando
var img = document.getElementsByClassName('checkColor')
console.log(imgBox, img)

for (let i = 0; i < imgBox.length; i++) {
    imgBox[i].addEventListener('click', () => {
        img[i].style.display = 'none'
    })
}

export default function Productcolor(props){
    return(
        <Boxcolor ref='' className="imgBox" color={props.color}>
            <img className='checkColor' src={checkImage} alt="" />
        </Boxcolor>
    )
}