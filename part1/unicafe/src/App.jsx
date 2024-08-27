import { useState } from 'react'

const App = () => {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [acc, setClicks] = useState([])
  const [total, setTotalClicks] = useState(0)
  const [average, setAverage] = useState(0)

  const handleGood = () => {
    setClicks(acc.concat(good))
    const updatedCount = good + 1
    setGood(updatedCount)
    setTotalClicks(updatedCount+bad+neutral)
  }

  const handleBad = () => {
    setClicks(acc.concat(bad))
    const updatedCount = bad + 1
    setBad(updatedCount)
    setTotalClicks(updatedCount+good+neutral)
  }

  const handleNeutral = () => {
    setClicks(acc.concat(neutral))
    const updatedCount = neutral + 1
    setNeutral(updatedCount)
    setTotalClicks(updatedCount+good+bad)
  }

  return (
    <>
      <div>
        <button onClick={handleGood}>Good</button>
        <button onClick={handleNeutral}>Neutral</button>
        <button onClick={handleBad}>Bad</button>
      </div>

      <div>
        <h1>Statistics</h1>
        <p>good {good}</p>
        <p>bad {bad}</p>
        <p>neutral {neutral}</p>
        <p>total {total}</p>
      </div>
    </>

  )
}

export default App
