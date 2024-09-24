import { useState } from "react";

function Button({ buttonEventHandler, text }) {
  return <button onClick={buttonEventHandler}>{text}</button>;
}

function Statistics({ value }) {
  if (value.getTotalFeedback() > 0) {
    return (
      <>
        <StatisticLine text="Good" value={value.good}></StatisticLine>
        <StatisticLine text="Neutral" value={value.neutral}></StatisticLine>
        <StatisticLine text="Bad" value={value.bad}></StatisticLine>
        <StatisticLine
          text="Total"
          value={value.getTotalFeedback()}
        ></StatisticLine>
        <StatisticLine
          text="Average"
          value={value.getAverage()}
        ></StatisticLine>
        <StatisticLine
          text="Total Positive"
          value={value.getTotalPositive()}
        ></StatisticLine>
      </>
    );
  } else {
    return <p>No Feedback Given</p>;
  }
}

function StatisticLine({ text, value }) {
  return (
    <>
      <p>
        {text}: {value}
      </p>
    </>
  );
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
      <Button text="Good" buttonEventHandler={handleGoodFeedback}></Button>
      <Button
        text="Neutral"
        buttonEventHandler={handleNeutralFeedback}
      ></Button>
      <Button text="Bad" buttonEventHandler={handleBadFeedback}></Button>

      <h2>Statistics</h2>
      <Statistics value={feedback}></Statistics>
    </>
  );
}

export default App;
