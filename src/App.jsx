import { useState, useEffect } from "react";
import "./view.css";
import instructionIcon from "./assets/info.png";

function App() {
  const [image, setImage] = useState(null);
  const [score, setScore] = useState(-1);
  const [bestScore, setbestScore] = useState(-1);

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
          <div className="scores">Scores 0</div>
          <div className="bestscores">Best Score 0</div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          {image && (
            <img src={image[0].frontDefault} className="pokemon-image" />
          )}
        </div>
        <div className="card">
          {image && (
            <img src={image[1].frontDefault} className="pokemon-image" />
          )}
        </div>
        <div className="card">
          {image && (
            <img src={image[2].frontDefault} className="pokemon-image" />
          )}
        </div>
        <div className="card">
          {image && (
            <img src={image[3].frontDefault} className="pokemon-image" />
          )}
        </div>
        <div className="card">
          {image && (
            <img src={image[4].frontDefault} className="pokemon-image" />
          )}
        </div>
        <div className="card">
          {image && (
            <img src={image[5].frontDefault} className="pokemon-image" />
          )}
        </div>
        <div className="card">
          {image && (
            <img src={image[6].frontDefault} className="pokemon-image" />
          )}
        </div>
        <div className="card">
          {image && (
            <img src={image[7].frontDefault} className="pokemon-image" />
          )}
        </div>
        <div className="card">
          {image && (
            <img src={image[8].frontDefault} className="pokemon-image" />
          )}
        </div>
        <div className="card">
          {image && (
            <img src={image[9].frontDefault} className="pokemon-image" />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
