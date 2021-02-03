import React from 'react'
import classes from './History.module.css'

const History = (props) => {
  return (
    <div className={classes.wrapper}>
      <span className={classes.title}>
        History
      </span> 
      <div className={classes.historyItemsWrapper}>
        { props.history.length === 0 ? (
          <div className={classes.emptyMessage}>
            Your history is empty
          </div>
        ) : (
          props.history.map(item => {
            return (
              <div className={classes.historyItem}>
                row {item.row} col {item.col}
              </div>
            )
          }))
        }
      </div>
    </div>
  )
}

export default History