export const preparePlayerData = (playerData) => {
  return Object.values(playerData)
};



export const addWinsToPlayers = (playerDataArray, matchData) => {
  return playerDataArray.map(player => {
    //calculate number of wins for each player in the match data
    const currentWins = matchData.reduce((accumulator, match) => {
      //adds a win if the gamertag matches
      if (match.winner === player.gamerTag) {
        return accumulator += 1;
      } else {
        return accumulator;
      }
    }, 0);

    // assigns the current value wins to the wins key
    player.wins = currentWins;

    return player;
  });
};

