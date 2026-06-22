import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}:</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  if (all === 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="All" value={all} />
        <StatisticLine text="AVG" value={((good - bad) / all).toFixed(1)} />
        <StatisticLine text="Positive" value={`${((good / all) * 100).toFixed(1)}%`} />
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>Give Feedback</h1>
      <Button onClick={() => setGood((prev) => prev + 1)} text="Good" />
      <Button onClick={() => setNeutral((prev) => prev + 1)} text="Neutral" />
      <Button onClick={() => setBad((prev) => prev + 1)} text="Bad" />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
