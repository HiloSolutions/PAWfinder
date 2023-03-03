//THESE ARE EXAMPLE ROUTES THAT NEED TO BE PLANNED AND UPDATED
const express = require("express"); //load express
const router = express.Router();
const animals = require('./petFinderAPI');


//****** HOME PAGE
// render
router.get('/', (req, res) => {
  const arr = Object.values(animals);
  res.json(arr);
});

//GET SPECIFIC ANIMAL
router.get('/:animalID', (req, res) => {
  const animalID = req.params.animalID;
  const animal = animals[animalId];
  res.json(animal);
});

//post api/animals to generate unique id
router.post('/', (req, res) => {
  const task = req.body.task;
  const complete = false;
  const id = Math.random().toString(36).substring(2, 5); //use package called uuid
  
  const newTask = {
    id,
    task,
    complete
  };

    animals[id] = newanimal;

    res.status(202).send()//what happens when we create a new animal?
});



module.exports = router;
