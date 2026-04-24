const express = require('express');
const router = express.Router();

const {
  createNote,
  multipleNotes,
  getAllNotes,
  getNotesById,
  UpdateById,
  UpdateFieldId,
  deleteById,
  deleteMulti
} = require('../controllers/note.controller.js');

// CREATE
router.post('/notes', createNote);
router.post('/multiple', multipleNotes);

// READ
router.get('/', getAllNotes);              // ✅ FIXED
router.get('/notes/:id', getNotesById);

// UPDATE
router.put('/:id', UpdateById);            // Full update
router.patch('/:id', UpdateFieldId);       // Partial update ✅ FIXED

// DELETE
router.delete('/delete-multiple', deleteMulti); // ✅ FIXED ORDER
router.delete('/:id', deleteById);

module.exports = router;