import css from './Registerprogress.css'
import styled from 'styled-components';

const Div = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${props=> props.color === 'active' ? '#d93010' : '#fff'};
`

const DivLine = styled.div`
    width: 40%;
    max-width: 250px;
    height: 5px;
    background-color: ${props=> props.color === 'active' ? '#d93010' : '#fff'};
`

export default function Registerprogress(props){
    if(props.step === 1){
        return(
            <div className="register-progress">
                <Div color='active'></Div>
                <DivLine ></DivLine>
                <Div className="step1"></Div>
                <DivLine ></DivLine>
                <Div className="step1"></Div>
            </div>
        )
    }else if(props.step === 2){
        return(
            <div className="register-progress">
                <Div color='active'></Div>
                <DivLine color='active'></DivLine>
                <Div color='active'></Div>
                <DivLine ></DivLine>
                <Div className="step1"></Div>
            </div>
        )
    }return(
        <div className="register-progress">
            <Div color='active'></Div>
            <DivLine color='active'></DivLine>
            <Div color='active'></Div>
            <DivLine color='active'></DivLine>
            <Div color='active'></Div>
        </div>
    )
}