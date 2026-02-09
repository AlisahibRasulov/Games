import React, { useState } from "react";

const Game1 = () => {
  const [player, setPlayer] = useState(null);
  const [computer, setComputer] = useState(null);
  const [result, setResult] = useState("");
  function getName(num) {
    if (num === 0) return "dash";
    if (num === 1) return "kagiz";
    if (num === 2) return "qayci";
  }

  function playGame(playerChoice) {
    const computerChoice = Math.floor(Math.random() * 3);
    setPlayer(playerChoice);
    setComputer(computerChoice);

    const win =
      (playerChoice == 1 && computerChoice == 0) ||
      (playerChoice == 2 && computerChoice == 1) ||
      (playerChoice == 0 && computerChoice == 2);

    if (playerChoice == computerChoice) {
      // alert(`oyun beraberdir,Player:${playerChoice},computer:${computerChoice}`)
      //   alert(
      //     `oyun beraberdir,Player:${getName(playerChoice)},computer:${getName(computerChoice)}`,
      //   );
      setResult("oyun beraberdir");
    } else if (win) {
      // alert(`uddun,Player:${playerChoice},computer:${computerChoice}`)
      //   alert(
      //     `uddun,Player:${getName(playerChoice)},computer:${getName(computerChoice)}`,
      //   );
      setResult("uddun");
    } else {
      // alert(`uduzdun,Player:${playerChoice},computer:${computerChoice}`)
      //   alert(
      //     `uduzdun,Player:${getName(playerChoice)},computer:${getName(computerChoice)}`,
      //   );
      setResult("uduzdun");
    }

    //  else if (playerChoice == 0 && computerChoice==1||playerChoice == 1 && computerChoice==2 || playerChoice == 2 && computerChoice==0) {
    //   alert(`uduzdun,Player:${playerChoice},computer:${computerChoice}`)
    //  }
  }
  function resetGame() {
    setPlayer(null);
    setComputer(null);
    setResult("");
  }
  return (
    <>
      {/* <div className="container">
      <div className="buttons">
        <button onClick={() => playGame(0)}>Das</button>
        <button onClick={() => playGame(1)}>Kagiz</button>
        <button onClick={() => playGame(2)}>Qayci</button>
      </div>
      <div className="result">
        <p>Sen: {getName(player)}</p>
          <p>Komputer: {getName(computer)}</p>

          <h3>{result}</h3>
      </div>
    </div> */}
      {result ? (
        <div className="container">
          <div className="cart">
            <div className="result">
              <h1>{result}</h1>
              <button onClick={resetGame}>Yeniden bashla</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="card">
            <div className="buttons">
              <button onClick={() => playGame(0)}>Das</button>
              <button onClick={() => playGame(1)}>Kagiz</button>
              <button onClick={() => playGame(2)}>Qayci</button>
            </div>
            <div className="result">
              <p>Sen: {getName(player)}</p>
              <p>Komputer: {getName(computer)}</p>
              {/* <h3>{result}</h3> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Game1;
