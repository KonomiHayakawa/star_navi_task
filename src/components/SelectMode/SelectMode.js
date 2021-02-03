import React from 'react'
import {Select, Button} from 'antd'
import {startCase} from 'lodash'
import classes from './SelectMode.module.css'

const SelectMode = (props) => {
  const { Option } = Select

  const modes = Object.keys(props.fieldModes)

  return (
    <div className={classes.wrapper}>
      <Select
        style={{ width: 200 }}
        placeholder='Pick mode'
        onChange={(fieldSize) => props.selectMode(fieldSize)}
      >
        {modes.map(mode => {
          const modeTitle = startCase(mode)
          const fieldSize = props.fieldModes[mode].field

          return (
            <Option 
              key={fieldSize}
              value={fieldSize}
            >
              {modeTitle}
            </Option>
          )
        })}
      </Select>
      <Button 
        onClick={() => props.switchField()}
        type='primary'
      >
        Start
      </Button>
    </div>
  )
}

export default SelectMode