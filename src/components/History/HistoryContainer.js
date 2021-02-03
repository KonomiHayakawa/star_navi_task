import React from 'react'
import {connect} from 'react-redux'
import {reverse} from 'lodash'
import History from './History'

const HistoryContainer = (props) => {
  const historyCopy = [...props.history]
  const historyReversed = reverse(historyCopy)

  return (
    <History 
      history={historyReversed}
    />
  )
}

const mapStateToProps = (state) => ({
  history: state.historyReducer.history,
})

export default connect(mapStateToProps, {})(HistoryContainer)