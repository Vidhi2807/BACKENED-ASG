
const express = require('express');
const router = express.Router();

const {
  createNote,
  multipleNotes,
  getAllNotes ,
  getNotesById,
  
 
} = require('../controllers/note.controller.js');

router.post('/notes', createNote);
router.post('/multiple', multipleNotes);
router.get('/notes', getAllNotes);
router.get('/notes/:id', getNotesById);


module.exports = router;