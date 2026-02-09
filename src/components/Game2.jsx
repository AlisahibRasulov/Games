import React, { useState } from "react";

const Game2 = () => {
  const choices = ["dash", "kagiz", "qayci"];

  const [player, setPlayer] = useState(null);
  const [computer, setComputer] = useState(null);
  const [result, setResult] = useState("");

  // Komputer seçimi
  function getComputerChoice() {
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
  }

  // Oyun məntiqi
  function playGame(playerChoice) {
    const computerChoice = getComputerChoice();

    setPlayer(playerChoice);
    setComputer(computerChoice);

    const win =
      (playerChoice === "kagiz" && computerChoice === "dash") ||
      (playerChoice === "qayci" && computerChoice === "kagiz") ||
      (playerChoice === "dash" && computerChoice === "qayci");

    if (playerChoice === computerChoice) {
      setResult("Draw 🤝");
    } else if (win) {
      setResult("Winner 🏆");
    } else {
      setResult("You lost 😞");
    }
  }

  // Reset
  function resetGame() {
    setPlayer(null);
    setComputer(null);
    setResult("");
  }

  return (
    <div className="container">

      {/* Nəticə varsa */}
      {result ? (
        <div className="cart">

          <div className="result">
            <p>Sen: {player}</p>
            <p>Komputer: {computer}</p>

            <h1
              className={
                result === "uddun"
                  ? "win"
                  : result === "uduzdun"
                  ? "lose"
                  : ""
              }
            >
              {result}
            </h1>
          </div>

          <div className="buttons">
            <button onClick={resetGame}>Yeniden bashla</button>
          </div>

        </div>
      ) : (
        // Oyun paneli
        <div className="card">

          <h2>Daş - Kağız - Qayçı</h2>

          <div className="buttons">
            {choices.map((item, index) => (
              <button
                key={index}
                onClick={() => playGame(item)}
              >
                {item}
              </button>
            ))}
          </div>

        </div>
      )}

    </div>
  );
};

export default Game2;
