import * as actionType from '../constants/actionType'

export const doAddStory = (stories) => {
    return {
        type: actionType.STORIES_ADD,
        payload: {stories}
    }
}

export const doFetchStory = query => {
    return {
        type: actionType.STORY_FETCH,
        payload: {query}
    }
}

export const doFetchErrorStories = error => {
    return {
        type: actionType.STORIES_FETCH_ERROR,
        payload: {error}
    }
}

