const Note = require('../models/note.model.js');


//// Create a new note
const createNote = async (req, res) => {
  try {
    const { title, content, category } = req.body;

    const newNote = new Note({ title, content, category });
    await newNote.save();

    res.status(201).json({
      success: true,
      msg:  'Note created successfully.',
      note: newNote,
    });

  } catch (error) {
    res.status(500).json({ msg: 'Server error.', error: error.message });
  }
};

////Create multiple notes
const multipleNotes = async (req,res) =>{
  try{
      const notesData = req.body;
      const createdNotes = await Note.insertMany(notesData);
      res.status(201).json({
        success: true,
          msg: 'Multiple notes created successfully.',
          notes: createdNotes
      }); 
  }
  catch(err){
      res.status(500).json({ msg: 'Server error.', error: err.message });
  }
}





module.exports = { createNote , multipleNotes };