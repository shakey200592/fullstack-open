import { useState } from 'react'

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

  console.log(`good: ${good}\nbad: ${bad}\nneutral: ${neutral}\nacc: ${acc}\nacc-length: ${accLength}`)

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
        <p>Average {(good-bad) / accLength}</p>
        <p>Positive {100*(good / accLength)} %</p>
      </div>
    </>

  )
}

export default App
