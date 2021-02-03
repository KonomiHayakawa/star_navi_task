import {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {Spin} from 'antd'
import 'antd/dist/antd.css'
import './App.css'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import FieldContainer from './components/Field/FieldContainer'
import HistoryContainer from './components/History/HistoryContainer'
import SelectModeContainer from './components/SelectMode/SelectModeContainer'
import {setFieldModes} from './redux/modesReducer'

const App = (props) => {
  const [isContentLoaded, setIsContentLoaded] = useState(false) 
  const [hasErrors, setHasErrors] = useState(false)

  useEffect(() => {
    const getFieldModes = async () => {
      try {
        const result = await fetch('https://demo1030918.mockable.io/')
        const fieldModesData = await result.json()
        props.setFieldModes(fieldModesData)
        setIsContentLoaded(true)
      } catch (e) {
        setHasErrors(true)
      }

    }
    getFieldModes()
  })

  if (hasErrors) {
    return <ErrorMessage />
  }

  return (
    isContentLoaded ? (
      <div className='appWrapper'>
        <div className='fieldArea'>
          <SelectModeContainer/>
          <FieldContainer />
        </div>
        <HistoryContainer />
      </div>
    ) : (
      <Spin 
        size='large'
        className='loader'
      />
    )
  )
}

export default connect(null, {setFieldModes})(App)