import css from './Purchase.css'

import React, { useState } from 'react'
import Modal from '../Modals/Modal';

import image from '../../../images/shop/cars/DTS.png'
/*TEM Q VER ISSO AQ */

export default function Purchase(props){
    
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    return(
        <div>
            <input type="button" onClick={() => setIsModalVisible(true)} 
            className='button-purchase' value={props.text}/>
            {isModalVisible ? <Modal text={props.value} img={image}
            onClose={() => setIsModalVisible(false)}/> 
            : null}
        </div>
    )
}
