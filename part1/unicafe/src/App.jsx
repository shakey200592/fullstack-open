import { useState } from 'react'

const Statistics = ({good, bad, neutral, total, average, goodPercent}) => {
  return (
    <div>
      <StatisticLine textContent="Good" value={good}>Good</StatisticLine>
      <StatisticLine textContent="Neutral" value={neutral}>Neutral</StatisticLine>
      <StatisticLine textContent="Bad" value={bad}>Bad</StatisticLine>
      <StatisticLine textContent="Total" value={total}>Total</StatisticLine>
      <StatisticLine textContent="Average" value={average}>Average</StatisticLine>
      <StatisticLine textContent="Percentage of Good" value={goodPercent}>Bad</StatisticLine>
    </div>
  )
}

const Button = ({handleClick, textContent}) => <button onClick={handleClick}>{textContent}</button>

const StatisticLine = ({textContent, value}) => <p>{textContent}: {value}</p>


const App = () => {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [acc, setClicks] = useState([])
  const [accLength, setLength] = useState(0)
  const [total, setTotalClicks] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setClicks(acc.concat(good))
    setTotalClicks(good+bad+neutral + 1)
    setLength(acc.length + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setClicks(acc.concat(bad))
    setTotalClicks(bad+good+neutral + 1)
    setLength(acc.length + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setClicks(acc.concat(neutral))
    setTotalClicks(neutral+good+bad + 1)
    setLength(acc.length + 1)
  }

  const average = (sum, length) => sum/length

  const percentage = (num, total) => 100*(num/total)

  if (accLength !== 0) {
    return (
      <>
        <div>
          <Button handleClick={handleGood} textContent="Good"></Button>
          <Button handleClick={handleNeutral} textContent="Neutral"></Button>
          <Button handleClick={handleBad} textContent="Bad"></Button>
        </div>
        <h1>Statistics</h1>
        <Statistics good={good} bad={bad} neutral={neutral} total={total} average={average(total, accLength)} goodPercent={percentage(good, total)}></Statistics>
      </>
    )

  }

  return (
    <>
      <div>
        <Button handleClick={handleGood} textContent="Good"></Button>
        <Button handleClick={handleNeutral} textContent="Neutral"></Button>
        <Button handleClick={handleBad} textContent="Bad"></Button>
      </div>
      <h1>Statistics</h1>
      <p>No feedback given</p>
    </>

  )
}

export default App
