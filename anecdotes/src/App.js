import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(Math.floor(Math.random() * anecdotes.length))
  const [votes, setVotes] = useState(Array.from({ length: anecdotes.length }, () => 0))

  const mostVotes = Math.max(...votes)
  const mostVotesIndex = votes.indexOf(mostVotes)
  const mostPopularAnecdote = anecdotes[mostVotesIndex]

  console.log(votes)

  const nextClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const voteClick = ()=> {
    const newVotes = [...votes]
    newVotes[selected] +=1
    setVotes(newVotes)
  }

  return (
    <div>
      <h2>Anecdote of the Day</h2>
      {anecdotes[selected]}
      <br />
      has {votes[selected]} votes
      <br />
      <button onClick={voteClick}>Vote</button>
      <button onClick={nextClick}>Next Anecdote</button>
      <h2>Anecdote with Most Votes</h2>
      {mostPopularAnecdote}
      <br />
      has {mostVotes} votes
    </div>
  )
}

export default App