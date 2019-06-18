import * as actionType from '../constants/actionType'

const doArchiveStory = (id) => ({
    type: actionType.STORY_ARCHIVE,
    payload: {id},
}) 

export { doArchiveStory }