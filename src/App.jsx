import React from 'react'

import Slider from './components/slider'
import {slides} from "./data/data.json"

const App = () => {
  return (
    <div>
      <Slider data={slides} />
    </div>
  )
}

export default App
