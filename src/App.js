import './App.css';
import PlayerList from "./components/PlayerList";
import MatchList from "./components/MatchList";
import matchData from './data/MatchData';
import playerData from './data/PlayerData';
import { preparePlayerData, addWinsToPlayer } from './helpers/playerHelpers';

function App(props) {

  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayer(playerDataArray, matchData);  


  return (
    <div className="App">
      <h1>
        Tourney Matches{" "}
        <span>Where Coding and Tournaments found their Match!</span>
      </h1>
      <PlayerList matchData={matchData} playerData={parsedPlayerData} />
      <MatchList matchData={matchData} />
    </div>
  );
}

export default App;
