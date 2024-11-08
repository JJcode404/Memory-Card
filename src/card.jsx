function Card({ image, index, handleClick, picAngle = "frontDefault" }) {
  return (
    <div className="card" onClick={handleClick}>
      {image && (
        <img
          src={image[index][picAngle]}
          className="pokemon-image"
          alt="Pokemon"
        />
      )}
    </div>
  );
}

export { Card };
