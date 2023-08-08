import React, { useState } from 'react';
import './Satti.css';

const Satti = () => {
  const [numPlayers, setNumPlayers] = useState(0);
  const [playerNames, setPlayerNames] = useState([]);
  const [numGames, setNumGames] = useState(0);
  const [showNumGames, setShowNumGames] = useState(true);
  const [showPlayerNames, setShowPlayerNames] = useState(false);
  const [playerGames, setPlayerGames] = useState([]);
  const [maxPoints, setMaxPoints] = useState({ player: '', points: 0 });
  const [minPoints, setMinPoints] = useState({ player: '', points: 0 });



  const handleSelectChange = (event) => {
    setNumPlayers(Number(event.target.value));
  };

  const handlePlayerNameChange = (event, index) => {
    const names = [...playerNames];
    names[index] = event.target.value;
    setPlayerNames(names);
  };

  const handleNumGamesChange = (event) => {
    setNumGames(Number(event.target.value));
  };

  const handleNumGamesSubmit = (event) => {
    event.preventDefault();
    setShowNumGames(false); // hide the "Enter number of games" section
    setShowPlayerNames(true); // show the "Please select No of players" section
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowPlayerNames(false); // hide the "Please select No of players" section
    handleGameSubmit(); // initialize the playerGames array with 0s
  };

  const handleGameSubmit = () => {
    const games = [];
    for (let i = 0; i < numPlayers; i++) {
      games[i] = 0;
    }
    setPlayerGames(games);
  };
  const handleResult = () => {
    let maxPlayer = '';
    let maxPoints = 0;
    let minPlayer = '';
    let minPoints = Number.MAX_SAFE_INTEGER;
  
    for (let i = 0; i < numPlayers; i++) {
      const playerPoints = playerGames.slice(i * numGames, (i + 1) * numGames).reduce((a, b) => a + b, 0);
      if (playerPoints > maxPoints) {
        maxPoints = playerPoints;
        maxPlayer = playerNames[i];
      }
      if (playerPoints < minPoints) {
        minPoints = playerPoints;
        minPlayer = playerNames[i];
      }
    }
  
    setMaxPoints({ player: maxPlayer, points: maxPoints });
    setMinPoints({ player: minPlayer, points: minPoints });
  };
  
  

  const handleGameChange = (event, index) => {
    const games = [...playerGames];
    games[index] = Number(event.target.value);
    setPlayerGames(games);
  };

  const renderInputFields = () => {
    const inputFields = [];

    for (let i = 0; i < numPlayers; i++) {
      inputFields.push(
        <input
          key={i}
          placeholder={`Player ${i + 1}`}
          value={playerNames[i] || ''}
          onChange={(event) => handlePlayerNameChange(event, i)}
        />
      );
    }

    return inputFields;
  };

  const renderTable = () => {
    const table = [];

    // Render table headers
    const headers = [];
    headers.push(<th key='player'>Player</th>);
    for (let i = 1; i <= numGames; i++) {
      headers.push(<th key={`game${i}`}>Game {i}</th>);
    }
    table.push(<tr key='header'>{headers}</tr>);

    // Render table rows
    for (let i = 0; i < numPlayers; i++) {
      const row = [];
      row.push(<td key={`player${i}`}>{playerNames[i]}</td>);
      for (let j = 0; j < numGames; j++) {
        const game = playerGames[i * numGames + j] || 0;
        row.push(
          <td key={`player${i}-game${j}`}>
            <input type='number' value={game} onChange={(event) => handleGameChange(event, i * numGames + j)} />
          </td>
        );
      }
      table.push(<tr key={`player${i}`}>{row}</tr>);
    }
    const totalPointsRow = [];
totalPointsRow.push(<td key="total">Total Points</td>);
for (let i = 0; i < numPlayers; i++) {
  const totalPoints = playerGames.slice(i * numGames, (i + 1) * numGames).reduce((a, b) => a + b, 0);
  totalPointsRow.push(<td key={`total${i}`}>{totalPoints}</td>);
}
table.push(<tr key="total">{totalPointsRow}</tr>);

}


return (
    <div style={{ background: 'gray' }}>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Please select the number of players</h1>
          <select onChange={handleSelectChange} value={numPlayers}>
            <option value={0}>Select the number of players</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
          </select>
          <hr/>
        </div>
        {numPlayers > 0 && (
          <div>
            <h1>Enter players names</h1>
            {renderInputFields()}
            <hr/>
          </div>
        )}
      </form>
      {showNumGames && (
        <div>
          <h1>Enter the number of games</h1>
          <input type="number" value={numGames} onChange={handleNumGamesChange} />
          <button onClick={() => setShowNumGames(false)}>OK</button>
        </div>
      )}
      {numGames > 0 && (
        <div>
          <br/>
          <hr/>
          <br/>
          <table>
            <thead>
              <tr>
                <th style={{ color: "" }}>NAME</th>
                {[...Array(numGames)].map((_, i) => (
                  <th style={{ color: "black" }} key={i}>Game {i + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {playerNames.map((name, playerIndex) => (
                <tr key={playerIndex}>
                  <td className='B'>{name}</td>
                  {[...Array(numGames)].map((_, gameIndex) => (
                    <td key={gameIndex}>
                      <input
                        className='A'
                        type="number"
                        value={playerGames[playerIndex * numGames + gameIndex]}
                        onChange={(event) =>
                          handleGameChange(event, playerIndex * numGames + gameIndex)
                        }
                      />
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td>Total Points</td>
                {playerNames.map((_, playerIndex) => (
                  <td key={`total${playerIndex}`}>
                    {playerGames
                      .slice(playerIndex * numGames, (playerIndex + 1) * numGames)
                      .reduce((a, b) => a + b, 0)}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {numGames > 0 && (
        <div>
          {renderTable()}
          <button onClick={handleResult}>Result</button>
        </div>
      )}
      {maxPoints.points > 0 && (
        <div>
          <h2>Party Dene Wala: {maxPoints.player} ({maxPoints.points} points)</h2>
          <p>Maximum score: {maxPoints.points} (player: {maxPoints.player})</p>
          <p>Minimum score: {minPoints.points} (player: {minPoints.player})</p>
        </div>
      )}
    </div>
  );
  

};

export default Satti;
