import React from 'react'
import { connect } from 'react-redux'
import { hideModal } from '../actions/index'
import Modal from './Modal'

const GreetingModal = ({ dispatch }) =>
    <Modal
        modalText='Hi! What&apos;s up?'
        modalAction={() => {
            alert('You accepted the modal action!')
            dispatch(hideModal()) 
        }}
        hideModal={() => { 
            dispatch(hideModal()) 
        }}
    />

export default connect()(GreetingModal)