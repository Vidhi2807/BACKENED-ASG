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

////get all notes
const getAllNotes = async (req,res)=>{
  try{
     const notes = await Note.find();
     res.status(200).json({
         success: true,
         msg: 'Notes retrieved successfully.',
         notes: notes
     });
  }
  catch(err){
      res.status(500).json({ msg: 'Server error.', error: err.message });
  }
}

////get notes by id
const getNotesById = async (req,res)=>{
  try{
      const noteId = req.params.id;
      const note = await Note.findById(noteId);
      if(!note){
         return res.status(404).json({msg:"Note not found"});
      }
      res.status(200).json({
        success: true,
        msg:"Note retrieved successfully.",
        note: note
      })
  }
  catch(err){
      res.status(500).json({msg : "Server error",error: err.message});
  }
}


module.exports = { createNote , multipleNotes ,getAllNotes, getNotesById}; 