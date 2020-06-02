// imports useState-function to handle stages
import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const StatisticsTable = (props) => {
  return (
    // td = table data, tr = table row
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
// ehtolause: jos yhtään arvostelua ei annettu
    if (props.all === 0) {
      return (
        <p>No feedback given</p>
      )
    }
  return(
    <div>
      <table>
        <tbody>
          <StatisticsTable text="good" value={props.feedback[0]}/>
          <StatisticsTable text="neutral" value={props.feedback[1]}/>
          <StatisticsTable text="bad" value={props.feedback[2]}/>
          <StatisticsTable text="all" value={props.all}/>
          <StatisticsTable text="average" value={props.avg}/>
          <StatisticsTable text="positive" value={props.positive}/>
        </tbody>
      </table>
    </div>
   
   
  )
}
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to own state
  // initial value of 0

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + bad + neutral
  const avg = (good - bad) / all
  const positive = 100 * good / all + " %"



  return (
      <div>
        <h1>give feedback</h1>
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
        <h1>statistics</h1>
        <Statistics feedback={[good, neutral, bad]} all={all} avg={avg} positive={positive} />                                              />
      </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root'))