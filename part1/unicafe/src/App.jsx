import { useState } from "react";

function Statistics({ feedback }) {
  if (feedback.getTotalFeedback() > 0) {
    return (
      <>
        <p>Good: {feedback.good}</p>
        <p>Neutral: {feedback.neutral}</p>
        <p>Bad: {feedback.bad}</p>
        <p>Total: {feedback.getTotalFeedback()}</p>
        <p>Average: {feedback.getAverage()}</p>
        <p>Total Positive: {feedback.getTotalPositive()}%</p>
      </>
    );
  } else {
    return <p>No Feedback Given</p>;
  }
}

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    getTotalFeedback() {
      return this.good + this.bad + this.neutral;
    },
    getAverage() {
      let goodScore = this.good;
      let neutralScore = this.neutral * 0;
      let badScore = this.bad * -1;
      let total = goodScore + neutralScore + badScore;

      return total === 0 ? 0 : total / this.getTotalFeedback();
    },
    getTotalPositive() {
      return this.good === 0 ? 0 : this.good / this.getTotalFeedback();
    },
  });

  const handleGoodFeedback = () =>
    setFeedback({ ...feedback, good: feedback.good + 1 });
  const handleNeutralFeedback = () =>
    setFeedback({ ...feedback, neutral: feedback.neutral + 1 });
  const handleBadFeedback = () =>
    setFeedback({ ...feedback, bad: feedback.bad + 1 });

  return (
    <>
      <h2>Give Feedback Below</h2>
      <button onClick={handleGoodFeedback}>Good</button>
      <button onClick={handleNeutralFeedback}>Neutral</button>
      <button onClick={handleBadFeedback}>Bad</button>

      <h2>Statistics</h2>
      <Statistics feedback={feedback}></Statistics>
    </>
  );
}

export default App;
