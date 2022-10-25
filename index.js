const Notes = require('./notesModel')
const NotesView = require('./notesView')

const model = new Notes();
const view = new NotesView();
model.addNote('Test Note');
view.displayNotes(model.getNotes())