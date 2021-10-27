import css from './Purchase.css'
import styled from 'styled-components';

const Input = styled.input`
    
    width: ${props=> props.changeFormat == true ? '100%' : '185px'};
    height: 60px;
    border-radius: 10px;
    cursor: pointer;
    background-color: #009933;
    font-size: 1.7rem;
    color: white;

    &:hover{border: 2px solid black;}

`

export default function Purchase(props){
    if(props.isHundred == true){
        return(
            <Input className='button-purchase' type="button" value='Pagar agora!' changeFormat={true}/>
        )
    }return(
        <Input className='button-purchase' type="button" value='comprar' changeFormat={false}/>
    )
}