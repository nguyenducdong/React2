
const initializeState = [];
export default (state = initializeState, action) => {
    switch(action.type) {
        case 'FETCH_POST':
            return [...state, action.payload];
        default:
            return state;

    }
}