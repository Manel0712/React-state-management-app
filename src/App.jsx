import { useState } from "react";
import { StatisticLine } from "./StatisticLine";
import { Button } from "./Button";

const App = () => {
  // save each button click in its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncreaseGood = () => {
    setGood((prevGood) => prevGood + 1);
  };

  const handleIncreaseNeutral = () => {
    setNeutral((prevNeutral) => prevNeutral + 1);
  };

  const handleIncreaseBad = () => {
    setBad((prevBad) => prevBad + 1);
  };

  const totalFeedback = good + neutral + bad;

  const averageScore =  (good - bad) / totalFeedback;

  const positivePercentage = (good * 100) / totalFeedback

  return ( <div>
  <h1>give feedback</h1>
  <Button onClick={handleIncreaseGood} text="good" />
  <Button onClick={handleIncreaseNeutral} text="neutral" />
  <Button onClick={handleIncreaseBad} text="bad" />
  <h1>statistics</h1>
  {totalFeedback === 0 ? (
    <p>No feedback given</p>
  ) : (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={totalFeedback} />
        <StatisticLine text="average" value={averageScore} />
        <StatisticLine
          text="positive"
          value={positivePercentage + "%"}
        />
      </tbody>
    </table>
  )}
</div>
  )
};

export default App;
