import "./SingleCard.css";

const SingleCard = function ({ card, handleChoice, flipped, disabled }) {
  const handleClick = function () {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          onClick={handleClick}
          className="back"
          src="./img/cover.png"
          alt="card back"
        />
      </div>
    </div>
  );
};

export default SingleCard;
