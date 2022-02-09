import React from "react";

import css from "./Modal.css"

export default function Modal(props){

    return(
        <div className="process-modal">
            <div className="container-modal">
                <div className="header-modal">
                    <div className="close-modal" onClick={props.onClose}></div>
                    <h3>Carro RTX</h3>
                </div>
                <div className="shopping-details">
                    <div className="product-image">
                        <img src={props.img} alt="" />
                    </div>
                    <div className="product-details"></div>
                </div>
                <p>Você não vai pedir reembolso fdp</p>
            </div>
        </div>
    )
}