
const express = require('express');
const router = express.Router();

const {
  createNote,
  multipleNotes,
  
 
} = require('../controllers/note.controller.js');

router.post('/notes', createNote);
router.post('/multiple', multipleNotes);


module.exports = router;