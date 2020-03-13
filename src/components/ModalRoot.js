import React from 'react'
import { connect } from 'react-redux'
import constants from '../constants'
import ConfirmModal from './ConfirmModal'
import GreetingModal from './GreetingModal'

const MODAL_COMPONENTS = {
    [constants.GREETING_MODAL]: GreetingModal,
    [constants.CONFIRM_MODAL]: ConfirmModal
}

const ModalRoot = ({ modalType, modalProps }) => {
    if (!modalType)
        return null

    const SpecificModal = MODAL_COMPONENTS[modalType]    
    return <SpecificModal {...modalProps} />
}

const mapStateToProps = state => ({
    modalType: state.modals.modalType,
    modalProps: state.modals.modalProps
})

export default connect(mapStateToProps)(ModalRoot)