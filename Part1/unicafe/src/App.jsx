import { useState } from 'react'

const Button = (props) => {
  return(
      <button onClick={props.handleClick}>
        {props.text}
      </button>
  )
}

const Header = (props) => {
  return(
    <h1>{props.text}</h1>
  )
}

const Stats = (props) => {
  return(
    <div>
      <p>{props.text} {props.stats}</p>
    </div>
  )
}

const All = ({ good, neutral, bad}) => {
  return(
    <p>all {good + neutral + bad}</p>
  )
}

const Average = ({ good, neutral, bad}) => {
  const sum = good + neutral + bad
  return(
    <p>average {(good + (bad * -1)) / sum}</p>
  )
}

const Positive = ({ good, neutral, bad}) => {
  const sum = good + neutral + bad
  return(
    <p>Positive {(good / sum) * 100}%</p>
  )
}

const Statistics = ({ good, neutral, bad}) => {
  const sum = good + neutral + bad
  if (sum === 0) {
    return(
      <div>
        <Header text='statistics'/>
        <p>No feedback given</p>
      </div>
    )
  }
  return(
    <div>
      <Header text='statistics'/>
      <Stats stats={good} text='good'/>
      <Stats stats={neutral} text='neutral'/>
      <Stats stats={bad} text='bad'/>
      <All good={good} neutral={neutral} bad={bad}/>
      <Average good={good} neutral={neutral} bad={bad}/>
      <Positive good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const AddGood = () => {
    setGood(good + 1)
  }

  const AddNeutral = () => {
    setNeutral(neutral + 1)
  }

  const AddBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header text='give feedback'/>
      <Button handleClick={() => AddGood()} text='good'/>
      <Button handleClick={() => AddNeutral()} text='neutral'/>
      <Button handleClick={() => AddBad()} text='bad'/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App