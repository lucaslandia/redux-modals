import React from 'react'
import { connect } from 'react-redux'
import { hideModal } from '../actions'
import Modal from './Modal'

const ConfirmModal = ({ dispatch }) =>
    <Modal
        modalText='This is a confirm modal'
        modalAction={() => { 
            alert('You accepted the modal action!') 
            dispatch(hideModal())
        }}
        hideModal={() => { 
            dispatch(hideModal()) 
        }}
    />

export default connect()(ConfirmModal)