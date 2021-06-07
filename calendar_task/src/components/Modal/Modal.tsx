import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import './Modal.sass';


export interface ModalProps {
    children?: JSX.Element[] | JSX.Element;
    isOpen: boolean;
    onOuterClick?: (e?: React.MouseEvent) => void;
}

function Modal({
    children,
    isOpen
}: ModalProps) {
    const [animate, setAnimate] = useState(false);
    const [renderContent, setRenderContent] = useState(false);
    const [containerElement, setContainerElement] = useState<HTMLDivElement>();

    const registerContainerElement = useCallback(node => {
        if (node !== null) {
            setContainerElement(node);
        }
    }, []);

    useEffect(() => {
        if (isOpen) {
            // Apply animation after first render
            setTimeout(() => setAnimate(true));
            if (containerElement) {
                // Wait until animation is over before rendering content
                containerElement.addEventListener('transitionend', () => {
                    setRenderContent(true);
                });
            }
        } else {
            setAnimate(false);
            setRenderContent(false);
        }
    }, [isOpen, containerElement]);

    if (isOpen) {
        return createPortal(
            <div className={`modal__backdrop ${animate && 'modal__backdrop--animate'}`}>
                <div ref={registerContainerElement} className="modal__container">
                    <div className="modal__content" style={{ opacity: !renderContent ? 0 : 1 }}>
                        {children}
                    </div>
                </div>
            </div>, document.querySelector('#root') || document.body
        );
    }
    return null;
}


export default Modal;
