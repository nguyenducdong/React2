import React from 'react'
import './Stories.css'
import Story from './Story'
import {connect} from 'react-redux'
import {getReadableStories} from '../selectors/storySelector'

const COLUMNS = {
    title:{
        lable: "Title",
        width: "40%"
    },
    author: {
        lable: "Author",
        width: "30%"
    },
    comments: {
        lable: "Comments",
        width: "10%"
    },
    points: {
        lable: "Points",
        width: "10%"
    },
    archive: {
        lable: "",
        width: "10%"
    }
}

const Stories = ({stories, error}) => {
    return (
        <div className="stories">
            <StoriesHeader columns={COLUMNS}/>

            {(stories || []).map(story =>
                <Story key={story.objectID} story={story}  columns={COLUMNS}/>
            )}
        </div>
    )
}

const StoriesHeader = ({ columns }) =>
  <div className="stories-header">
    {Object.keys(columns).map(key =>
      <span
        key={key}
        style={{ width: columns[key].width }}
      >
        {columns[key].label}
      </span>
    )}
  </div>


const mapStateToProps = state => {
    return {
        stories: getReadableStories(state),
        error: null
    }
}

export default connect(mapStateToProps)(Stories)

