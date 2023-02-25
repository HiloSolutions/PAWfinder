
import MatchButton from "./buttons/MatchButton";
import SkipButton from "./buttons/SkipButton";

function AnimalCards(){
  return(
    <div className="card-container">
      <img alt="animal here" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0k2oxtGAyhqykN5Fmh_m7Iz8_mjomums8uiA1hqAo&s"></img>
      <h2>Yehhefer Elizabeth</h2>
      <p>I am a happy cat looking for a loving home. I am good with kids and other animals.</p>
      <div>
        < MatchButton />
        < SkipButton />
      </div>
    </div>
  )
}

export default AnimalCards;