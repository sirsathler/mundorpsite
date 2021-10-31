import css from './Vehicleinfo.css'
import styled from 'styled-components';

import imgIcon from '../../images/vehicle/id-icon.png'

const Div = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center; 
    align-items: center; 
    width: 120px; 
    height: 120px; 
    margin: 5px;
    border: ${props=> props.isBanner == false ? '1px solid #a4a4a4' : '1px solid #fff'};
    border-radius: ${props=> props.isBanner == false ? '10px' : 'none'};

    p{text-align: center; font-size: 1.7rem; color: #fff;}

    .vehicle-info-icon{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 70%;

        img{width: 30px;}
    }

    .vehicle-info-bd{width: 100%; height: 30%;

        p{color: #7a7a7a;}
    }
`

export default function Vehicleinfo(props){
    if(props.isPageVehicle == true){
        return(
            <Div isBanner={false}>
                <div className="vehicle-info-icon">
                    <img src={imgIcon} alt="" />
                </div>
                <div className="vehicle-info-bd">
                    <p>NaoseioID</p>
                </div>
            </Div>
        )
    }return(
        <Div isBanner={true}>
            <p>Este veiculo é seu!</p>
        </Div>
    )
}