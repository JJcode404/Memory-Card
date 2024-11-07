function gameInstructions() {
  return (
    <div className="insturctions">
      <h1>Game Instructions:</h1>
      <div className="objective">
        <strong>Objective:</strong> Test your memory by clicking each picture
        only once. The challenge is to remember which pictures you've already
        clicked to avoid repeating any!
      </div>
      <ol>
        <li>
          <strong>Click a picture </strong>to select it. Each picture can only
          be clicked once!
        </li>
        <li>
          <strong>Avoid duplicates:</strong> If you click a picture more than
          once, the game ends.
        </li>
        <li>
          Try to click through{" "}
          <strong>all the pictures without repeating</strong> to win the game.
        </li>
        <li>
          The game gets harder as you go—stay sharp and keep track of what
          you've clicked!
        </li>
      </ol>
      <div className="last">Good luck! Can you remember them all?</div>
    </div>
  );
}
