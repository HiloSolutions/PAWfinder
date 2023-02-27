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
  const toDoID = req.params.toDoID;
  const todo = todos[todoId];
  res.json(todo);
});

//post api/animals to generate unique id
router.post('/', (req, res) => {
  const task = req.body.task;
  const complete = false;
  const id = Math.random(1)*10; //use package called uuid
  res.json(arr);
});

module.exports = router;
