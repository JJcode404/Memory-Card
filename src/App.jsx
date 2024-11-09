import { useState, useEffect } from "react";
import "./view.css";
import React from "react";
import instructionIcon from "./assets/info.png";
import { Card } from "./card";

function App() {
  const [image, setImage] = useState(null);
  const [score, setScore] = useState(-1);
  const [bestScore, setbestScore] = useState(-1);
  const [clickedState, setClickedState] = useState({});

  const cardComponents = [
    <Card image={image} index={0} />,
    <Card image={image} index={1} />,
    <Card image={image} index={2} />,
    <Card image={image} index={3} />,
    <Card image={image} index={4} />,
    <Card image={image} index={5} />,
    <Card image={image} index={6} />,
    <Card image={image} index={7} />,
    <Card image={image} index={8} />,
    <Card image={image} index={9} />,
  ];

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((response) => response.json())
      .then((data) => {
        const pokemonUrls = data.results.map((pokemon) => pokemon.url);

        Promise.all(
          pokemonUrls.map((url) =>
            fetch(url)
              .then((response) => response.json())
              .then((pokemonData) => ({
                frontDefault: pokemonData.sprites.front_default,
                backDefault: pokemonData.sprites.back_default,
                frontShiny: pokemonData.sprites.front_shiny,
                backShiny: pokemonData.sprites.back_shiny,
                officialArtwork:
                  pokemonData.sprites.other["official-artwork"].front_default,
                dreamWorld:
                  pokemonData.sprites.other["dream_world"].front_default,
                homeSprite: pokemonData.sprites.other["home"].front_default,
              }))
          )
        ).then((imageData) => {
          console.log(imageData);
          setImage(imageData);
        });
      });
  }, []);

  function playround() {}

  return (
    <>
      <div className="header">
        <div className="left">
          <div className="logo">ONE SHOT MEMORY GAME</div>
          <div className="instructions">
            Get points by clicking on an image but don't click on any more than
            once!
            <img
              src={instructionIcon}
              alt="Instructions icon"
              className="instructionIcon"
            />
          </div>
        </div>
        <div className="right">
          <div className="scores">Scores {score}</div>
          <div className="bestscores">Best Score {bestScore}</div>
        </div>
      </div>
      <div className="container">
        {image ? (
          cardComponents.map((card, key) => (
            <React.Fragment key={key}>{card}</React.Fragment>
          ))
        ) : (
          <p>Loading images........</p>
        )}
      </div>
    </>
  );
}

export default App;
