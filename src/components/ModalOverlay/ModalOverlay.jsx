import React from "react";
import overlayStile from '../ModalOverlay/ModalOverlay.module.css'
import PropTypes from 'prop-types'



function ModalOverlay({ children, setIsOpen, onClose }) {
    return (

        <div className={overlayStile.overlay} onClick={onClose} >

        </div>

    );
};

ModalOverlay.propTypes={
    onClose: PropTypes.func.isRequired
}

export default ModalOverlay;