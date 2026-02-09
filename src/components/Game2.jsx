import React, { useState } from "react";

const Game2 = () => {
  const choices = ["rock", "paper", "scissors"];

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
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "rock" && computerChoice === "scissors");

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
            <p>You: {player}</p>
            <p>Computer: {computer}</p>

            <h1
              className={
                result === "Winner 🏆"
                  ? "win"
                  : result === "You lost 😞"
                    ? "lose"
                    : ""
              }
            >
              {result}
            </h1>
          </div>

          <div className="buttons">
            <button onClick={resetGame}>Try again</button>
          </div>
        </div>
      ) : (
        // Oyun paneli
        <div className="card">
          <h2>Rock - Paper - Scissors</h2>

          <div className="buttons">
            {choices.map((item, index) => (
              <button key={index} onClick={() => playGame(item)}>
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
