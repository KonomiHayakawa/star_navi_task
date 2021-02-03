import React from 'react'
import {connect} from 'react-redux'
import {clearHistory} from './../../redux/historyReducer'
import {setSelectedModeSize, setIsGameStarted} from './../../redux/modesReducer'
import SelectMode from './SelectMode'

const SelectModeContainer = (props) => {
  const selectMode = (fieldSize) => {
    props.setIsGameStarted(false)
    props.setSelectedModeSize(fieldSize)
  }

  const switchField = () => {
    props.setIsGameStarted(true)
    props.clearHistory()
  }

  return (
    <SelectMode
      fieldModes={props.fieldModes}
      selectMode={selectMode}
      switchField={switchField}
    />
  )
}

const mapStateToProps = (state) => ({
  fieldModes: state.modesReducer.fieldModes,
})

export default connect(
  mapStateToProps, 
  { clearHistory,
    setSelectedModeSize, 
    setIsGameStarted
  })(SelectModeContainer)