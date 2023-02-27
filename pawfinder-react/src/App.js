import './styles/App.css';
import AnimalCard from "./components/Animals/AnimalCard";
import animals from "./routes/animalApi";
import axios from "axios";


const App = () => {

  return (
    <div className="card-grid">
      {animals.map((item) => {
        return (
          < AnimalCard
            key={item.id}
            name={item.name}
            description={item.description}
            img1={item.photos[0].small}

          />
        )
      })}
    </div>
  );
}

export default App;
