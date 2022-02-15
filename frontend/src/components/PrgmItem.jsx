const PrgmItem = ({ info, isFavorite, isAppliable, onChangeFavorite }) => {
  const handleFavorite = event => {
    event.stopPropagation();
    const seq = parseInt(event.target.getAttribute('data-sequence'));
    onChangeFavorite(seq);
  }

  return (
    <>
      <span>{info.name}</span>
      <div>
        <span>{info.region}</span>
        <span>{info.country}</span>
        <span>
          {isAppliable
            ? 'O'
            : 'X'}
        </span>
        <button className={isFavorite ? "pin" : null} 
                data-sequence={info.sequence}
                onClick={handleFavorite}>pin</button>
      </div>
    </>
  )
}

export default PrgmItem;
