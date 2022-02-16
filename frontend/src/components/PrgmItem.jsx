import { useNavigate } from "react-router-dom"

const PrgmItem = ({ info, isFavorite, isAppliable, onChangeFavorite }) => {
  const navigate = useNavigate();
  
  const handleClick = event => {
    const seq = event.currentTarget.getAttribute('data-seq');
    navigate(`/programs/${seq}`);
  }

  const handleFavorite = event => {
    event.stopPropagation();

    const seq = parseInt(event.target.getAttribute('data-sequence'));
    onChangeFavorite(seq);
  }

  return (
    <div data-seq={info.sequence} onClick={handleClick}>
      <span>{info.name}</span>
      <div>
        <span>{info.region}</span>
        <span>{info.country}</span>
        <span>{isAppliable ? 'O' : 'X'}</span>
        <button style={{"color": isFavorite ? "red" : null}}
                data-sequence={info.sequence}
                onClick={handleFavorite}>pin</button>
      </div>
    </div>
  )
}

export default PrgmItem;
