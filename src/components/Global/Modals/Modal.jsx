import React from "react";

import css from "./Modal.css"
import img from "../../../images/icons/mp.png"

import Purchase from "../Buttons/Purchase"

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
                    <div className="product-details">
                        <div className="box-details">
                            <div className="confirm-shopping">
                                <div className="icon-type-shopping">
                                    <img src={img} alt="" />
                                </div>
                                <div className="box-calc">
                                    <p>Saldo atual :</p>
                                    <p>5.000</p>
                                </div>
                                <div className="box-calc">
                                    <p>RTX 3090 Ti :</p>
                                    <p>6.000</p>
                                </div>
                                <div className="border"></div>{/*gambiarra?*/}
                                <div className="box-calc">
                                    <p>Saldo Total :</p>
                                    <p>-1.000</p>
                                </div>
                            </div>
                            <Purchase text="confirmar compra"/>
                        </div>
                    </div>
                </div>
                <p>Você não vai pedir reembolso fdp</p>
            </div>
        </div>
    )
}