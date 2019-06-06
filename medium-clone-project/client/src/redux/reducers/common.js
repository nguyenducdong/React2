import * as constant from '../../constants/constant_action_type'

const defaultState = {
    appName: '',
    modalMode: false
}

export default (state = defaultState, action) => {
    switch(action.type){
        case constant.TOGGLE_MODAL:
            console.log(`toggling modal ${action.payload.modalMode}`)
            return {
                ...state,
                modalMode: action.payload.modalMode
            }
        default:
            return state;
    }
}

