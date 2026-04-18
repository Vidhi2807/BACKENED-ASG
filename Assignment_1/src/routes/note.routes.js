
const express = require('express');
const router = express.Router();

const {
  createNote,
  multipleNotes,
  getAllNotes ,
  getNotesById,
  UpdateById ,
  UpdateFieldId , 
  deleteById , 
  deleteMulti
  
 
} = require('../controllers/note.controller.js');

router.post('/notes', createNote);
router.post('/multiple', multipleNotes);
router.get('/notes', getAllNotes);
router.get('/notes/:id', getNotesById);
router.put('/:id',UpdateById);
router.put('/:id',UpdateFieldId);
router.delete('/:id', deleteById);
router.delete('/delete-multiple', deleteMulti);




module.exports = router;