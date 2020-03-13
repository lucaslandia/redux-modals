import React, { createRef, useCallback, useEffect } from 'react'
import './Modal.sass'

const Modal = ({ modalText, modalAction, hideModal }) => {
    let modalRef = createRef()   
    
    const handleClick = useCallback(e => {
        if (!modalRef.current.contains(e.target))
            hideModal()
    }, [modalRef, hideModal])        
    
    useEffect(() => {
        document.addEventListener('mousedown', handleClick)
        
        return () => { document.removeEventListener('mousedown', handleClick) }
    }, [handleClick])    

    return (
        <div className='Modal-backdrop'>
            <div ref={modalRef} className='Modal-main'>
                <h2 className='Modal-title'>{modalText}</h2>
                <div className='Modal-buttons'>
                    <button className='Modal-button' onClick={modalAction}>Accept</button>
                    <button className='Modal-button' onClick={hideModal}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Modal