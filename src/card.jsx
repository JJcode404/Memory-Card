function Card({
  image,
  index,
  handleClick,
  picAngle = "frontDefault",
  isclicked,
}) {
  return (
    <div className={isclicked ? "clicked card" : "card"} onClick={handleClick}>
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
