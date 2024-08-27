import { useState } from 'react'

const Button = ({handleClick, textContent}) => {
  return (
    <>
      <button onClick={handleClick}>{textContent}</button>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]


  const [selected, setSelected] = useState(0)
  const points = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0}
  const copy = {...points}
  const [numVotes, setVotes] = useState(points)

  const handleRandomAnecdote = () => {
    const randomAnectdoteIndex = (Math.floor(Math.random() * anecdotes.length)) 
    setSelected(randomAnectdoteIndex)

  }

  const handleVotes = () => {
    setVotes({...numVotes, [selected] : numVotes[selected] + 1})
  }

  let anecdoteVotes = Object.values(numVotes)
  let max = anecdoteVotes.indexOf(Math.max(...anecdoteVotes))
  console.log(anecdoteVotes)
  console.log(max)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Button handleClick={handleRandomAnecdote} textContent="Generate Random Anecdote"></Button>
      <Button handleClick={handleVotes} textContent="Vote For Anecdote"></Button>
      <p>{anecdotes[selected]}</p>
      <p>has {numVotes[selected]} votes</p>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[max]}</p>
      <p>has {numVotes[max]}</p>
    </div>
  )
}

export default App