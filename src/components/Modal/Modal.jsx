
import ReactDOM from 'react-dom';
import stile from '../Modal/Modal.module.css'
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { useEffect } from 'react';


export default function Modal({ children, onClose, header }) {

    const closeOnEscapeKey = e => e.key === "Escape" ? onClose() : null;
    useEffect(() => {
        document.addEventListener("keydown", closeOnEscapeKey);
        return () => {
            document.removeEventListener("keydown", closeOnEscapeKey);
        };
    }, [onClose]);

    return ReactDOM.createPortal(
        <>
            <ModalOverlay onClose={onClose} />
            <div className={`${stile.modal} pl-10 pr-10 pt-10`} >
                <div className={stile.title}>
                    <div className={`text text_type_main-large ${stile.text}`} >
                        {header}
                    </div>
                    <div className={stile.close} onClick={onClose}>
                        <CloseIcon type="primary" />
                    </div>
                </div>
                {children}
            </div>

        </>,

        document.getElementById('root-modal')
    )
}




