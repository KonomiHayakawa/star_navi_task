import React from 'react'
import {connect} from 'react-redux'
import {addToHistory} from './../../redux/historyReducer'
import Field from './Field'
import {setCurrentRow, setCurrentColumn} from './../../redux/fieldReducer'

const FieldContainer = (props) => {
  const fieldSize = props.selectedModeSize

  const setCurrentCell = (row,col) => {
    props.setCurrentRow(row)
    props.setCurrentColumn(col)
    props.addToHistory({row, col})
  }

  return (
    <Field
      fieldSize={fieldSize}
      isGameStarted={props.isGameStarted}
      setCurrentCell={setCurrentCell}
    />
  )
}

const mapStateToProps = (state) => ({
  isGameStarted: state.modesReducer.isGameStarted,
  selectedModeSize: state.modesReducer.selectedModeSize,
})

export default connect(
  mapStateToProps, 
  { addToHistory,
    setCurrentRow, 
    setCurrentColumn,
  })(FieldContainer)