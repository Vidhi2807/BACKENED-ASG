
const express = require('express');
const router = express.Router();

const {
  createNote,
  multipleNotes,
  getAllNotes
  
 
} = require('../controllers/note.controller.js');

router.post('/notes', createNote);
router.post('/multiple', multipleNotes);
router.get('/notes', getAllNotes);


module.exports = router;