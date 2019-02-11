const express = require('express');
const Promise = require('bluebird');
const rp = require('request-promise');

const app = express();

app.get('/api/:summoner', async (req,res) => {
  try {
    const summonerName = req.params.summoner;
    const API_KEY = 'RGAPI-9a55e734-0987-4659-be95-a8de72be26d5';
    const url1 = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`;
    const url1Json = JSON.parse(await rp(url1));
    const accountId = url1Json.accountId;
    const url2 = `https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?api_key=${API_KEY}`;
    const url2Json = JSON.parse(await rp(url2));
    const matches = url2Json.matches.map( async (match) => {
      try {
        return await rp(`https://na1.api.riotgames.com/lol/match/v4/matches/${match.gameId}?api_key=${API_KEY}`);
      } catch (e) {
        console.error(e);
      }
    });
    // matches = Promise.all(matches);
    console.log(matches);
    res.json(matches);
  } catch (e) {
    // console.error(e);
  }
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Listening on port: ${port}`);