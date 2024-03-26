const { getAllTypes } = require('../controllers/getTypesController');
const { postTypesController } = require("../controllers/postTypesController");

//POST types
const postTypesHandler = async (req, res) => {
  try {
    const response = await postTypesController();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}


//GET all types
const getTypesHandler = async (req, res) => {
  try {

    //make sure always attempt to POST them Types
    const responsePostType = await postTypesController();
    // console.log('respuesta primera: ', responsePostType);

    const response = await getAllTypes();

    res.status(200).json(response);

  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = {
  getTypesHandler,
  postTypesHandler,
}