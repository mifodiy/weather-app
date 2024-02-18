import React from 'react'
import { createPortal } from 'react-dom';
import './Modal.css'

const Modal = ({onClick, children}) => {
	const handleOverlayClick = e => {
		if(e.target === e.currentTarget){
			onClick();
		}
	}
	return createPortal(
		<div className='modal__overlay' onClick={handleOverlayClick}>
			<div className='modal__content'>
				{children}
			</div>
		</div>,
		document.getElementById('modal-root')
	)
}

export default Modal