import { useState } from "react"

const Display= ({counter}) => <> {counter} </>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const History = ({allClicks}) => {
  if(allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const[allClicks, setAll] = useState([])
  const[total, setTotal] = useState(0)

  const handleLeftClick =  () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handleRightClick =  () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }


  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <>
      <div>
        <Display counter={counter}></Display>
      </div>

      <Button handleClick={increaseByOne} text="Increase"></Button>
      <Button handleClick={decreaseByOne} text="Decrease"></Button>
      <Button handleClick={setToZero} text="Zero"></Button>
      <p></p>

      <div>
        {left}
        <Button handleClick={handleLeftClick} text="Left"></Button>
        <Button handleClick = {handleRightClick} text="Right"></Button>
        {right}
        <History allClicks={allClicks}></History>
        <p>Total button presses: {total}</p>
      </div>
    </>
  )

}

export default App