import api from '../api/jsonPlaceholder'

export const fetchPosts = () => async(dispatch, getState) => {
    const response = await api.get('/posts')
    dispatch({
        type: 'FETCH_POST',
        payload: response.data
    })
}
