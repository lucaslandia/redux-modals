import constants from '../constants'

export const showModal = (modalType, modalProps) => ({
    type: constants.SHOW_MODAL,
    modalType,
    modalProps
})

export const hideModal = () => ({
    type: constants.HIDE_MODAL
})