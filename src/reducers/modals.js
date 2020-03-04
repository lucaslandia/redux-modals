import constants from '../constants'

const initialState = {
    modalType: null,
    modalProps: {}
}

const modals = (state = initialState, action) => {
    switch (action.type) {
        case constants.SHOW_MODAL:
            return { 
                modalType: action.modalType, 
                modalProps: action.modalProps 
            }
        case constants.HIDE_MODAL:
            return initialState
        default:
            return state
    }
}

export default modals