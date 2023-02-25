
import MatchButton from "./buttons/MatchButton";
import SkipButton from "./buttons/SkipButton";

function AnimalCards(props) {
  console.log(props);
  return (
    <div className="card-container">
      <img className="card-img" alt={props.name} src={props.img1}></img>
      <div className="card-text">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
      <footer className="card-footer">
          < SkipButton />
          < MatchButton />
        </footer>
    </div>
  )
}

export default AnimalCards;