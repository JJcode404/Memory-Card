import { useState, useEffect, useMemo } from "react";
import "./view.css";
import React from "react";
import instructionIcon from "./assets/instruction.png";
import { Card } from "./card";

function App() {
  const [image, setImage] = useState(null);
  const [score, setScore] = useState(0);
  const [bestScore, setbestScore] = useState(0);
  const [clickedState, setClickedState] = useState({});
  const cardComponents = [
    {
      image: (
        <Card
          image={image}
          index={0}
          isclicked={clickedState["card-0"] || false}
          handleClick={() => handleClickEvent("card-0")}
          id="card-0"
        />
      ),
      id: "card-0",
    },
    {
      image: (
        <Card
          image={image}
          index={1}
          isclicked={clickedState["card-1"] || false}
          handleClick={() => handleClickEvent("card-1")}
          id="card-1"
        />
      ),
      id: "card-1",
    },
    {
      image: (
        <Card
          image={image}
          index={2}
          isclicked={clickedState["card-2"] || false}
          handleClick={() => handleClickEvent("card-2")}
          id="card-2"
        />
      ),
      id: "card-2",
    },
    {
      image: (
        <Card
          image={image}
          index={3}
          isclicked={clickedState["card-3"] || false}
          handleClick={() => handleClickEvent("card-3")}
          id="card-3"
        />
      ),
      id: "card-3",
    },
    {
      image: (
        <Card
          image={image}
          index={4}
          isclicked={clickedState["card-4"] || false}
          handleClick={() => handleClickEvent("card-4")}
          id="card-4"
        />
      ),
      id: "card-4",
    },
    {
      image: (
        <Card
          image={image}
          index={5}
          isclicked={clickedState["card-5"] || false}
          handleClick={() => handleClickEvent("card-5")}
          id="card-5"
        />
      ),
      id: "card-5",
    },
    {
      image: (
        <Card
          image={image}
          index={6}
          isclicked={clickedState["card-6"] || false}
          handleClick={() => handleClickEvent("card-6")}
          id="card-6"
        />
      ),
      id: "card-6",
    },
    {
      image: (
        <Card
          image={image}
          index={7}
          isclicked={clickedState["card-7"] || false}
          handleClick={() => handleClickEvent("card-7")}
          id="card-7"
        />
      ),
      id: "card-7",
    },
    {
      image: (
        <Card
          image={image}
          index={8}
          isclicked={clickedState["card-8"] || false}
          handleClick={() => handleClickEvent("card-8")}
          id="card-8"
        />
      ),
      id: "card-8",
    },
    {
      image: (
        <Card
          image={image}
          index={9}
          isclicked={clickedState["card-9"] || false}
          handleClick={() => handleClickEvent("card-9")}
          id="card-9"
        />
      ),
      id: "card-9",
    },
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

  function handleClickEvent(id) {
    function game() {
      if (clickedState[id]) {
        setScore(0);
      } else {
        setScore((prevScore) => prevScore + 1);
        setbestScore((prevBestScore) => Math.max(prevBestScore, score + 1));
      }
    }
    game();

    console.log(clickedState);
    setClickedState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
    console.log("you have clicked this card", id);
  }

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
          cardComponents.map((card) => (
            <React.Fragment key={card.id}>{card.image}</React.Fragment>
          ))
        ) : (
          <p>Loading images........</p>
        )}
      </div>
    </>
  );
}

export default App;
