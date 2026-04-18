
const express = require('express');
const router = express.Router();

const {
  createNote,
 
} = require('../controllers/note.controller.js');

router.post('/notes', createNote);


module.exports = router;