import * as actionType from './actionType'
import axios from 'axios'

export const fetchUser = () => async dispatch => {
    try {
        const res = await axios.get('/api/current_user');
        dispatch({
            type: actionType.FETCH_USER,
            payload: res.data
        })
    } catch (error) {
        
    }

}

export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe',token);
    dispatch({
        type: actionType.FETCH_USER,
        payload: res.data
    })
}
