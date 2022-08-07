import './App.css';
import PlayerList from "./components/PlayerList";
import MatchList from "./components/MatchList";
import matchData from './data/MatchData';
import playerData from './data/PlayerData';

function App(props) {
  return (
    <div className="App">
      <h1>
        Tourney Matches{" "}
        <span>Where Coding and Tournaments found their Match!</span>
      </h1>
      <PlayerList matchData={matchData} playerData={playerData} />
      <MatchList matchData={matchData} />
    </div>
  );
}

export default App;
