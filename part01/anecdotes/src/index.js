import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  // tilanhallinta: alussa kaikilla vitseillä on 0 ääntä
  const [selected, setSelected] = useState(0)
  // int8Array creates a typed array of twos-complement 8-bit signed 
  const [votes, setVotes] = useState({0: 0, 1: 0, 2: 3, 3: 0, 4: 0, 5: 0})
  // metodi addVotes, kasvattaa valitun vitsin äänimäärää
  const addVote = () => {
    const newVotes = {
      ...votes,
      [selected]: votes[selected] + 1
  }
    setVotes(newVotes)
    // tulostaa vitsien äänimäärät
    console.log(newVotes)

}
const [mostVotes, maxValue] = Object.entries(votes).reduce((acc,cur) => cur[1] > acc[1] ? cur : acc)
// return ei aina tarkoita toiselle komponentille siirtoa vaan myös näytölle tulostamista kuten tässä
  // <br /> toimii rivinvaihtona, Math.random arpoo satunnaisen vitsin
  // Button-komponentin tapahtumankäsittelijät: 1 kutsuvat metodeita 2 luovat tekstin buttoniin
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <br />
      has {votes[selected]}
      <br />
      <Button handleClick={() => addVote()} text="vote" />
      <Button handleClick={() => setSelected (Math.floor(Math.random() * 6))} text="next anecdote" /> 
      <br />
      <h1>Anecdote with most votes</h1>
      {props.anecdotes[mostVotes]}
      <br />
      has {votes[mostVotes]}   
    </div>
  )

}
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
  
//seuraavaksi: Anecdote with most votes, ks tg 27.3.2019 0:33 Meri
// ts. pitäisi näyttää vitsi, jolla korkein votes-arvo
// eka vitsi (0), toka vitsi (1) jne.
// pitäisi käydä taulukko läpi ja tulostaa suurin arvo
// 1. Teen funktio joka tulostaa tietyn vitsin äänimäärän
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));