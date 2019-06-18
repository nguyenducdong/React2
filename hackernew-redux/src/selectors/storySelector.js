const isNotArchived = archivedIds => story => 
    archivedIds.indexOf(story.objectID) === -1

export const getReadableStories = ({storyState, archiveState}) => {
    return storyState.stories.filter(isNotArchived(archiveState))
}

export const getFetchError = (storyState) => {
    return storyState.error;
}

