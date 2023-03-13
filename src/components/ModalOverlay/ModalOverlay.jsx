import React from "react";
import overlayStile from '../ModalOverlay/ModalOverlay.module.css'



function ModalOverlay({ children, setIsOpen, onClose }) {
    return (

        <div className={overlayStile.overlay} onClick={onClose} >

        </div>

    );
};


export default ModalOverlay;