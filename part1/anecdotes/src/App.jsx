import { useState } from "react";

const App = () => {
  const anecdotes = [
    { votes: 0, value: "If it hurts, do it more often." },
    {
      votes: 0,
      value: "Adding manpower to a late software project makes it later!",
    },
    {
      votes: 0,
      value:
        "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    },
    {
      votes: 0,
      value:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    },
    { votes: 0, value: "Premature optimization is the root of all evil." },
    {
      votes: 0,
      value:
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    },
    {
      votes: 0,
      value:
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    },
    { votes: 0, value: "The only way to go fast, is to go well." },
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(anecdotes);

  const updateVotes = () => {
    return setVotes(
      votes.map((item, index) => {
        if (index === selected) {
          return { ...item, votes: item.votes + 1 };
        } else {
          return { ...item };
        }
      })
    );
  };

  const getRandomAnectdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const result = votes.reduce(
    (max, current, index) => {
      if (current.votes > max.votes) {
        return { votes: current.votes, index: index };
      }
      return max;
    },
    { votes: -1, index: -1 }
  );

  let max = votes[result.index];

  return (
    <>
      <h2>Anecdote of the day</h2>
      <div>{votes[selected].value}</div>
      <p>Has {votes[selected].votes}</p>
      <button onClick={getRandomAnectdote}>Generate Random Anecdote</button>
      <button onClick={updateVotes}>Vote</button>
      <h2>Anecdote with the most votes:</h2>
      <p>{max.value}</p>
      <p>has {max.votes}</p>
      <p></p>
    </>
  );
};

export default App;
