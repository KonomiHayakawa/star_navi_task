import React from 'react'
import classes from './Field.module.css'

const Field = (props) => {  
  return (
    <table className={classes.table}>
      <tbody>
        {props.isGameStarted && props.fieldSize ? (
          [...Array(props.fieldSize)].map((_, rowNumber) => {
            return (
              <tr key={rowNumber}>
                <Columns 
                  fieldSize={props.fieldSize} 
                  rowNumber={rowNumber} 
                  setCurrentCell={props.setCurrentCell}
                />
              </tr>
            )
          })
        ) : (
          <EmptyField />
        )} 
      </tbody>
    </table> 
  )
}

const Columns = (props) => {
  return (
    <>
      {[...Array(props.fieldSize)].map((_, colNumber) => {
        return (
          <td 
            className={classes.cell} 
            key={colNumber} 
            onMouseOver={() => props.setCurrentCell(props.rowNumber+1, colNumber+1)} 
          />
        )
      })}
    </>
  )
}

const EmptyField = () => {
  return (
    <tr>
      <td>
        Select mode and press start button
      </td>
    </tr>
  )
}

export default Field