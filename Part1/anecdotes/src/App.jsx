import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return(
    <button onClick={handleClick}>{text}</button>
  )
}

const VotesLine = (props) => {
  return(
    <p>has {props.votes} votes</p>
  )
}

const Header = ({ text }) => <h1>{text}</h1>

const MostVotes = ({ title, anec, votes }) => {
  return(
    <div>
      <Header text={title}/>
      <p>{anec}</p>
      <VotesLine votes={votes}/>
    </div>
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
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(8).fill(0))
  const [high, setHigh] = useState('')
  const [highVotes, setHighVotes] = useState(0)

  const Random = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
  }

  const Vote = () => {
    const newVotes = [...votes]
    newVotes[selected] = newVotes[selected] + 1
    setVotes(newVotes)
    HighestVotes()
    console.log(highVotes, votes)
  }

  const HighestVotes = () => {
    const maxValue = Math.max(...votes)
    const index = votes.indexOf(maxValue)
    setHigh(anecdotes[index])
    setHighVotes(votes[index])
  }

  return (
    <div>
      <Header text='Anecdote of the day'/>
      <p>{anecdotes[selected]}</p>
      <VotesLine votes={votes[selected]}/>
      <Button text='vote' handleClick={() => Vote()}/><Button text='next anecdote' handleClick={() => Random()}/>
      <MostVotes title='Anecdote with most votes' anec={high} votes={highVotes}/>
    </div>
  )
}

export default App