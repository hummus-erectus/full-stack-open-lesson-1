import { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const giveGoodFeedback = () => {
    setGood(prev => prev+1)
  }

  const giveNeutralFeedback = () => {
    setNeutral(prev => prev+1)
  }

  const giveBadFeedback = () => {
    setBad(prev => prev+1)
  }

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button handleClick={giveGoodFeedback}text="Good"/>
      <Button handleClick={giveNeutralFeedback}text="Neutral"/>
      <Button handleClick={giveBadFeedback}text="Bad"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App