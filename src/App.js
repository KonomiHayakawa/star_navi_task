import {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {Spin} from 'antd'
import 'antd/dist/antd.css'
import './App.css'
import FieldContainer from './components/Field/FieldContainer'
import HistoryContainer from './components/History/HistoryContainer'
import SelectModeContainer from './components/SelectMode/SelectModeContainer'
import {setFieldModes} from './redux/modesReducer'

const App = (props) => {
  const [isContentLoaded, setIsContentLoaded] = useState(false) 

  useEffect(() => {
    const getFieldModes = async () => {
      const result = await fetch('http://demo1030918.mockable.io/')
      const fieldModesData = await result.json()
      props.setFieldModes(fieldModesData)
      setIsContentLoaded(true)
    }
    getFieldModes()
  })

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