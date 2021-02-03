import React from 'react'
import classes from './ErrorMessage.module.css'
import kek from './../../img/error.jpg'

const ErrorMessage = (props) => {  
  return (
    <div className={classes.wrapper}>
      <img
        alt='an error has occurred'
        className={classes.image}
        src={kek}
      />
      <div className={classes.errorText}>
        Sorry, an error has occurred :(
      </div>
    </div>
  )
}


export default ErrorMessage