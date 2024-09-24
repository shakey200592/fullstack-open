import StatisticLine from "./statisticLine";

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

export default Statistics;
