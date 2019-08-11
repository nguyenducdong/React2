import * as actionType from '../actions/actionType'
const initialState = {
    user: null
};

export default (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
        case actionType.FETCH_USER:
            return {
                ...state,
                user: action.payload || false
            }
        default:
            return state;
    }
}