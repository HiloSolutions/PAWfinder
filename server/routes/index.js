const express = require("express"); //load express
const router = express.Router();


//****** HOME PAGE
// render
router.get('/', (req, res) => {
  res.render('index', {title: "Home"});
});

module.exports = router;
