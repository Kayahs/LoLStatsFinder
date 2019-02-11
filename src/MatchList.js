import React, { useEffect } from 'react';

const MatchList = (props) => {
  const API_KEY = 'RGAPI-9a55e734-0987-4659-be95-a8de72be26d5'
  const fetchData = async () => {
    const result = await fetch(`/api/${props.summoner}`);
    console.log(result);
    const response = await result.json();
    console.log(response);
  }
  fetchData();
  // React.useEffect(() => {
  //   console.log(fetchData);
  // }, []);
  return (
    <div>
      <p>This is a list of matches</p>
      <p>{props.summoner}</p>
      {console.log(props.summoner)}
    </div>
  )
}

export default MatchList;