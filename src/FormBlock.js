import React, { useState } from 'react';
import MatchList from './MatchList'

const FormBlock = () => {
  const [summonerName, setSummonerName] = useState('');
  const [submitName, setSubmitName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setSubmitName(summonerName);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={event => setSummonerName(event.target.value)} type="text" placeholder="Enter Summoner Name" />
      </form>
      {isSubmitted && 
        <MatchList summoner={submitName} />
      }
    </div>
  )
}

export default FormBlock;