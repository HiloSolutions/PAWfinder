import './styles/App.css';
import AnimalCards from "./components/AnimalCards";
import animals from "./routes/animalApi";


function App() {

  return (
    <div className="card-grid">
      {animals.map((item) => {
        return (
          < AnimalCards
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
